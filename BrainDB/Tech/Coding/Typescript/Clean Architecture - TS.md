![captionless image](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*ujyBxx3RUzHGX18CKXmK4Q.png)

Introduction
============

Clean Architecture, conceptualized by Robert C. Martin, is a software design philosophy that prioritizes maintainability, flexibility, and independence from external frameworks. This architectural pattern revolves around fundamental principles, such as the separation of concerns, independence of frameworks, and a clear hierarchy of components. By enforcing a strict structure and dependency management, Clean Architecture facilitates the development of scalable and testable software systems.

Applying the concepts of Clean Architecture has been instrumental in building my project. I’ve strategically separated responsibilities in alignment with these principles, and the benefits are tangible. Let’s explore how these principles contribute to the maintenance and scalability of the codebase:

**1. Separation of Concerns:**

By implementing Clean Architecture, the separation of core business logic into entities and use cases allows for changes in the UI or database without impacting critical business rules. This clear distinction aids in easier maintenance as modifications to the UI can be made independently.

**2. Independence of Frameworks:**

In my project, the independence from external frameworks ensures that we can seamlessly switch or upgrade components without disrupting the entire application. For instance, migrating from one database technology to another becomes a smoother process with minimal impact on the existing codebase.

**3. Clear Hierarchy of Components:**

The well-defined hierarchy, from entities at the core to external frameworks at the periphery, provides a structured roadmap for understanding and navigating the codebase. This hierarchy simplifies maintenance, making it easier to locate and modify specific components without affecting unrelated parts of the system.

**4. Strict Structure and Dependency Management:**

Enforcing a strict structure in my project ensures that dependencies flow inward, with the core business logic having minimal dependencies on external frameworks. This approach simplifies maintenance because changes in external frameworks are isolated, requiring minimal modifications throughout the codebase.

**5. Scalable and Testable Systems:**

The modular nature of Clean Architecture in my project allows for the addition of new features or enhancements without causing a ripple effect across the entire codebase. Additionally, the clear separation of concerns makes unit testing more effective, contributing to a scalable and testable codebase that can evolve with changing requirements.

Applying Clean Architecture principles has not only provided a robust foundation for my project but has also empowered me to navigate the complexities of software development with confidence.

**Implementation of the Backend with Clean Architecture**
=========================================================

In the backend implementation of my project, Clean Architecture was adopted from the innermost layer to the outermost, promoting a clear separation of responsibilities. Entities represent the core of the system, encapsulating fundamental business logic, while use cases orchestrate the interaction between these entities and interface adapters. Interface adapters, in turn, translate data between the system core and external elements such as databases and web frameworks. This approach ensures that business logic remains independent of external implementation details, promoting a clean and modular architecture.

**Practical Implementation of Code Structure:**

**1.** `**domain**` **Directory:**

*   The `domain` directory is the heart of the system, housing classes that represent the core business logic. This is where entities, value objects, and application-specific business rules reside.

```ts
backend/src/domain
```

**2.** `**domain/dtos**`**,** `**domain/entities**`**,** `**domain/enums**`**, and** `**domain/valueObjects**` **Directories:**

*   `dtos`: Contains Data Transfer Objects for seamless data transfer between layers.

**_Example:_**

```ts
export interface ICreateUserRequestDTO {
  name: string
  email: string
  password: string
}
```

*   `entities`: Hosts classes representing core business logic.

**_Example:_**

```ts
export class User {
  private _name: string
  private _email: Email
  private _password: string
  static create({ email, name, password }: ICreateUserRequestDTO) {
    const newEmail = new Email({ address: email })
    return new User({ name, email: newEmail, password })
  }
  static update(updatedUser: IUpdateUserRequestDTO) {
    if (updatedUser.email) {
      updatedUser.email = new Email({ address: updatedUser.email }).address
    }
    return updatedUser
  }
  get name(): string {
    return this._name
  }
  get email(): Email {
    return this._email
  }
  get password(): string {
    return this._password
  }
  constructor(props: UserInterface) {
    this._name = props.name
    this._password = props.password
    this._email = props.email
  }
}
```

*   `enums`: Contains enumerations representing distinct values in the domain.

**_Example:_**

```
export enum UserErrorType {
  UserAlreadyExists = 'User already exists!',
  UserDoesNotExist = 'User does not exist!',
  UserNotFound = 'Users not found',
}
```

*   `valueObjects`: Houses Value Objects representing concepts with no conceptual identity.

**_Example:_**

```ts
export class Email {
  private _address: string
  get address(): string {
    return this._address
  }
  constructor(props: EmailProps) {
    if (
      props.address == null ||
      !props.address.match(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
      )
    ) {
      throw new Error(EmailErrorType.InvalidEmail)
    }
    this._address = props.address
  }
}

```

*   The overall directory structure in the `domain` directory is organized as follows:

```ts
backend/src/domain/dtos
backend/src/domain/entities
backend/src/domain/enums
backend/src/domain/valueObjects
```

**3.**`**app**` **Directory:**

*   The `app` directory contains application-specific logic that interfaces with the domain. This includes providers, repositories, and use cases.

```ts
backend/src/app
```

**4.** `**app/providers**`**,** `**app/repositories**`**, and** `**app/useCases**` **Directories:**

*   `providers`: Contains modules responsible for offering services or dependencies, aligning with the Dependency Inversion Principle.

**_Example:_**

```ts
export interface IPasswordHasher {
  hashPassword(password: string): Promise<string>;
  comparePasswords(password: string, hashedPassword: string): Promise<boolean>;
}t
```

*   `repositories`: Hosts classes responsible for data access, serving as a bridge between the application and data storage.

**_Example:_**

```ts
export interface IUsersRepository {
  create(data: ICreateUserRequestDTO): Promise<IUserOutRequestDTO>
  findByEmail(email: string): Promise<IUserInRequestDTO | unknown>
  findById(id: string): Promise<IUserInRequestDTO | unknown>
  findAll(pageNumber: number): Promise<PaginationDTO>
  update(
    user: IUserOutRequestDTO,
    data: IUpdateUserRequestDTO,
  ): Promise<IUserOutRequestDTO>
  delete(id: string): Promise<void>
}
```

*   `useCases`: Represents application-specific business rules, ensuring a clean separation of concerns.

**_Example:_**

```ts
export class CreateUserUseCase implements ICreateUserUseCase {
  constructor(
    private userRepository: IUsersRepository,
    private passwordHasher : IPasswordHasher,
  ) {}
  async execute({
    email,
    name,
    password,
  }: ICreateUserRequestDTO): Promise<ResponseDTO> {
    try {
      const userEntity = User.create({
        email,
        name,
        password,
      })
      const userAlreadyExists = await this.userRepository.findByEmail(
        userEntity.email.address,
      )
      if (userAlreadyExists) {
        return { data: { error: UserErrorType.UserAlreadyExists }, success: false }
      }
      const passwordHashed = await this.passwordHasher.hashPassword(password)
      const user = await this.userRepository.create({
        email: userEntity.email.address,
        name: userEntity.name,
        password: passwordHashed,
      })
      return { data: user, success: true }
    } catch (error: any) {
      return { data: { error: error.message }, success: false }
    }
  }
}
```

*   The overall directory structure in the `app` directory is organized as follows:

```ts
backend/src/app/providers
backend/src/app/repositories
backend/src/app/useCases
```

**5.** `**infra**` **Directory:**

*   Infrastructure-related code is organized under the `infra` directory, encapsulating interactions with external systems or frameworks.

```
backend/src/infra
```

**6.** `**infra/databases**`**,** `**infra/providers**`**,** `**infra/repositories**`**,** `**infra/services**`**, and** `**infra/utils**` **Directories:**

*   `databases`: Contains code related to database interactions.

**_Example:_**

```ts
model User {
  id        String   @id @default(uuid())
  createdAt DateTime @default(now())
  email     String   @unique
  name      String
  password  String
  refresh_token RefreshToken[]
  @@map("users")
}
```

*   `providers`: Hosts infrastructure providers handling external services or dependencies.

**_Example:_**

```
export class PasswordHasher implements IPasswordHasher {
  private readonly saltRounds: number;
  constructor(saltRounds: number = 10) {
    this.saltRounds = saltRounds;
  }
  async hashPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(this.saltRounds);
    const hash = await bcrypt.hash(password, salt);
    return hash;
  }
  async comparePasswords(password: string, hashedPassword: string): Promise<boolean> {
    return bcrypt.compare(password, hashedPassword);
  }
}
```

*   `repositories`: Contains infrastructure repositories interacting with data storage mechanisms.

**_Example:_**

```tsX
export class UserRepository implements IUsersRepository {
  constructor(private prisma: PrismaClient) {}
  async create({
    email,
    name,
    password,
  }: ICreateUserRequestDTO): Promise<IUserOutRequestDTO> {
    const user = this.prisma.user.create({
      data: {
        email,
        name,
        password,
      },
      select: {
        id: true,
        email: true,
        name: true,
        createdAt: true,
      },
    })
    return user
  }
  async findByEmail(email: string): Promise<IUserInRequestDTO | unknown> {
    const user = await this.prisma.user.findFirst({
      where: { email },
      select: {
        id: true,
        email: true,
        name: true,
        password: true,
        createdAt: true,
      },
    })
    return user
  }
  async findById(id: string): Promise<IUserInRequestDTO | null> {
    const user = await this.prisma.user.findFirst({
      where: { id },
      select: {
        id: true,
        email: true,
        name: true,
        password: true,
        createdAt: true,
      },
    })
    return user
  }
  async findAll(pageNumber: number): Promise<PaginationDTO> {
    const perPage = 4
    const user: IUserOutRequestDTO[] = await this.prisma.user.findMany({
      take: perPage,
      skip: Math.ceil((pageNumber - 1) * perPage),
      orderBy: {
        name: 'asc',
      },
      select: {
        id: true,
        email: true,
        name: true,
        createdAt: true,
      },
    })
    const total = await this.prisma.user.count()
    return {
      body: user,
      total,
      page: pageNumber,
      last_page: Math.ceil(total / perPage),
    }
  }
  async update(
    user: IUserOutRequestDTO,
    { email, name, password }: IUpdateUserRequestDTO,
  ): Promise<IUserOutRequestDTO> {
    const userUpdated = await this.prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        email,
        name,
        password,
      },
    })
    return userUpdated
  }
  async delete(id: string): Promise<void> {
    await this.prisma.user.delete({
      where: {
        id,
      },
    })
  }
}
```

*   `services`: Hosts infrastructure services encapsulating external services or integrations.

**_Example:_**

```

export function createUserComposer() {
  const repository: IUsersRepository = new UserRepository(prismaClient)
  const passwordHasher: IPasswordHasher = new PasswordHasher()
  const useCase: ICreateUserUseCase = new CreateUserUseCase(repository, passwordHasher)
  const controller: IController = new CreateUserController(useCase)
  return controller
}
```

*   `utils`: Contains utility classes or functions related to infrastructure.

**_Example:_**

```
export function validateToken(token: string): boolean {
  try {
    verify(token, process.env.API_SECRET || '');
    return true;
  } catch (error) {
    return false;
  }
}
```

*   The overall directory structure in the `infra` directory is organized as follows:

```
backend/src/infra/databases
backend/src/infra/providers
backend/src/infra/repositories
backend/src/infra/services
backend/src/infra/utils
```

**7.** `**presentation**` **Directory:**

*   The `presentation` directory contains code related to the presentation layer of the application.

```
backend/src/presentation
```

**8.** `**presentation/adapters**`**,** `**presentation/express**`**, and** `**presentation/http**` **Directories:**

*   `adapters`: Hosts adapters handling the translation of data between the application and external systems.

**_Example:_**

```
export async function expressAdapter(
  request: Request,
  apiRoute: IController,
): Promise<IHttpResponse> {
  const httpRequest: IHttpRequest = new HttpRequest({
    header: request.header,
    body: request.body,
    path: request.params,
    query: request.query,
  })
  const response: IHttpResponse = await apiRoute.handle(httpRequest)
  return response
}
```

*   `express`: Contains Express.js related code for the presentation layer.

**_Example:_**

```
userRoutes.post('/', async (request: Request, response: Response) => {
  const adapter = await expressAdapter(request, createUserComposer())
  return response.status(adapter.statusCode).json(adapter.body)
})
```

*   `http`: Contains HTTP-related code for handling incoming requests and sending responses.

**_Example:_**

```
export class CreateUserController implements IController {
  constructor(
    private createUserCase: ICreateUserUseCase,
    private httpErrors: IHttpErrors = new HttpErrors(),
    private httpSuccess: IHttpSuccess = new HttpSuccess(),
  ) {}
  async handle(httpRequest: IHttpRequest): Promise<IHttpResponse> {
    let error
    let response: ResponseDTO
    if (httpRequest.body && Object.keys(httpRequest.body).length > 0) {
      const bodyParams = Object.keys(httpRequest.body)
      if (
        bodyParams.includes('name') &&
        bodyParams.includes('email') &&
        bodyParams.includes('password')
      ) {
        const createUserRequestDTO = httpRequest.body as {
          name: string
          email: string
          password: string
        }
        response = await this.createUserCase.execute(createUserRequestDTO)
      } else {
        error = this.httpErrors.error_422()
        return new HttpResponse(error.statusCode, error.body)
      }
      if (!response.success) {
        error = this.httpErrors.error_400()
        return new HttpResponse(error.statusCode, response.data)
      }
      const success = this.httpSuccess.success_201(response.data)
      return new HttpResponse(success.statusCode, success.body)
    }
    error = this.httpErrors.error_500()
    return new HttpResponse(error.statusCode, error.body)
  }
}
```

*   The overall directory structure in the `presentation` directory is organized as follows:

```
backend/src/presentation/adapters
backend/src/presentation/express
backend/src/presentation/http
```

**9.**`**tests**` **Directory:**

*   Dedicated directory for tests, maintaining a clear separation from the main codebase.

```
backend/tests
```

This structure ensures that the core business logic, residing in the `domain` directory, remains independent and clear, promoting a modular and maintainable architecture.

**Conclusion**
==============

In the journey of implementing Clean Architecture for my backend project, the emphasis has been on creating a codebase that is not just functional, but also scalable and maintainable. The `domain` directory stands as the core, housing essential business logic, while the `app`, `infra`, and `presentation` directories provide a clear separation of concerns.

The commitment to Clean Architecture principles ensures that the codebase remains flexible to change, fostering a modular structure that facilitates enhancements and modifications with ease. If you’re curious to explore the details, the full source code is available on GitHub: [Clean Architecture TypeScript Repository](https://github.com/deivisonisidoro/clean-arch-typescript).

In essence, Clean Architecture has proven to be more than a concept — it’s a practical philosophy that guides the development process, resulting in a codebase that is both robust and adaptable.
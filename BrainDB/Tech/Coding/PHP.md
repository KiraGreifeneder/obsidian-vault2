
## Basics
Within html, you can go into "php mode" unsing `<?php ?>`.
The content of this tag is then whatever PHP code you want to execute, for example.

```php 
<html>
    <?php 
        $testVar = "this is a variable";
        echo $testVar;
    ?>
</html>
```
Variables are denoted with a `$`, and `echo` outputs text **to the HTML element** 
(like writing `{ someVariable + ' this is my var' }`) in JSX.
It also comes with many predefined variables, which start with an underscore. For example:
`$_GET['video']`, `$_POST` let you access parts of incoming requests.

First class functions are assigned to variables, like so:

```php
<?php 
    $add = function ($a, $b) {
        return $a * $b;
    }
?>
```

Or can be used anonymously as arguments:

```php
<?php 
    array_map(function ($a, $b) {
        return $a * $b;
    });
?>
```

It also has a complete object model, allowing you to defined classes with inheritance.

```php
<?php 
    class Car {
        public $model;
        private $id;

        public function drive() {}
    }

    $car = new Car()
?>
```

## Webserver
The following command starts a webserver for the whole project at the following address, 
but executes the routerCridentials script first.

```ps
php -S localhost:8000 routerCredentials.php
```

## Forms
**Any form element will automatically be available to your PHP scripts**. 
For example, we might have a simple form like this:
```php
<form action="action.php" method="post">
    <label for="name">Your name:</label>
    <input name="name" id="name" type="text">

    <label for="age">Your age:</label>
    <input name="age" id="age" type="number">

    <button type="submit">Submit</button>
</form>
```

Which we can then access like this in `action.php`.

```php
Hi <?php echo htmlspecialchars($_POST['name']); ?>.
You are <?php echo (int)$_POST['age']; ?> years old.
```

Here, `htmlspecialchars()` provides input sanitization, 
and we can type cast the the age to an `int` to make sure we get valid results.
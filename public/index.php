<?php

require "../vendor/autoload.php";

// Use classes
use Bramus\Router\Router;

// Create Router instance
$router = new Router();

// Define routes
$router->get('/.*', function () {
    include "index.html";
    die();
});

// Run it!
$router->run();


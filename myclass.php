<?php
class Point
{
    public $x;
    public $y;
}


$dot = new Point;
$dot->$x = 42;
$dot->$y = 22;

echo $dot->$x;
echo $dot->$y;

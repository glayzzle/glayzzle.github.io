# Nodes Definitions

## Class hierarchy

* [Location](#location)
* [Position](#position)
* [Node](#node)
  * [Identifier](#identifier)
  * [TraitUse](#traituse)
  * [TraitAlias](#traitalias)
  * [TraitPrecedence](#traitprecedence)
  * [Entry](#entry)
  * [Case](#case)
  * [Label](#label)
  * [Comment](#comment)
    * [CommentLine](#commentline)
    * [CommentBlock](#commentblock)
  * [Error](#error)
  * [Expression](#expression)
    * [Array](#array)
    * [Variable](#variable)
    * [Variadic](#variadic)
    * [ConstRef](#constref)
    * [Yield](#yield)
    * [YieldFrom](#yieldfrom)
    * [Lookup](#lookup)
      * [PropertyLookup](#propertylookup)
      * [StaticLookup](#staticlookup)
      * [OffsetLookup](#offsetlookup)
    * [Operation](#operation)
      * [Pre](#pre)
      * [Post](#post)
      * [Bin](#bin)
      * [Parenthesis](#parenthesis)
      * [Unary](#unary)
      * [Cast](#cast)
    * [Literal](#literal)
      * [Boolean](#boolean)
      * [String](#string)
      * [Number](#number)
      * [Inline](#inline)
      * [Magic](#magic)
      * [Nowdoc](#nowdoc)
      * [Encapsed](#encapsed)
  * [Statement](#statement)
    * [Eval](#eval)
    * [Exit](#exit)
    * [Halt](#halt)
    * [Clone](#clone)
    * [Declare](#declare)
    * [Global](#global)
    * [Static](#static)
    * [Include](#include)
    * [Assign](#assign)
    * [RetIf](#retif)
    * [If](#if)
    * [Do](#do)
    * [While](#while)
    * [For](#for)
    * [Foreach](#foreach)
    * [Switch](#switch)
    * [Goto](#goto)
    * [Silent](#silent)
    * [Try](#try)
    * [Catch](#catch)
    * [Throw](#throw)
    * [Call](#call)
    * [Closure](#closure)
    * [New](#new)
    * [UseGroup](#usegroup)
    * [UseItem](#useitem)
    * [Block](#block)
      * [Program](#program)
      * [Namespace](#namespace)
    * [Sys](#sys)
      * [Echo](#echo)
      * [List](#list)
      * [Print](#print)
      * [Isset](#isset)
      * [Unset](#unset)
      * [Empty](#empty)
    * [Declaration](#declaration)
      * [Class](#class)
      * [Interface](#interface)
      * [Trait](#trait)
      * [Constant](#constant)
        * [ClassConstant](#classconstant)
      * [Function](#function)
        * [Method](#method)
      * [Parameter](#parameter)
      * [Property](#property)

---

**Parameters**

* `withPositions`
* `withSource`

### resolvePrecedence

Check and fix precence, by default using right

**Parameters**

* `result`

### prepare

Prepares an AST node

**Parameters**

* `kind` **([String](#string) | null)** Defines the node type
  (if null, the kind must be passed at the function call)
* `parser` **Parser** The parser instance (use for extracting locations)
* `docs`

Returns **[Function](#function)**

## AST

The AST builder class

**Parameters**

* `withPositions`
* `withSource`

**Properties**

* `withPositions` **[Boolean](#boolean)** Should locate any node (by default false)
* `withSource` **[Boolean](#boolean)** Should extract the node original code (by default false)

### resolvePrecedence

Check and fix precence, by default using right

**Parameters**

* `result`

### prepare

Prepares an AST node

**Parameters**

* `kind` **([String](#string) | null)** Defines the node type
  (if null, the kind must be passed at the function call)
* `parser` **Parser** The parser instance (use for extracting locations)
* `docs`

Returns **[Function](#function)**

## Array

**Extends Expression**

Defines an array structure

**Properties**

* `items` **[Array](#array)&lt;[Entry](#entry)>** List of array items
* `shortForm` **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** Indicate if the short array syntax is used, ex `[]` instead `array()`

**Examples**

```javascript
// PHP code :
[1, 'foo' => 'bar', 3]

// AST structure :
{
 "kind": "array",
 "shortForm": true
 "items": [{
   "kind": "entry",
   "key": null,
   "value": {"kind": "number", "value": "1"}
 }, {
   "kind": "entry",
   "key": {"kind": "string", "value": "foo", "isDoubleQuote": false},
   "value": {"kind": "string", "value": "bar", "isDoubleQuote": false}
 }, {
   "kind": "entry",
   "key": null,
   "value": {"kind": "number", "value": "3"}
 }]
}
```

## Assign

**Extends Statement**

Assigns a value to the specified target

**Properties**

* `left` **[Expression](#expression)**
* `right` **[Expression](#expression)**
* `operator` **[String](#string)**

## Bin

**Extends Operation**

Binary operations

**Properties**

* `type` **[String](#string)**
* `left` **[Expression](#expression)**
* `right` **[Expression](#expression)**

## Block

**Extends Statement**

A block statement, i.e., a sequence of statements surrounded by braces.

**Properties**

* `children` **[Array](#array)&lt;[Node](#node)>**

## Boolean

**Extends Literal**

Defines a boolean value (true/false)

## Break

**Extends Node**

A break statement

**Properties**

* `level` **([Number](#number) \| [Null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null))**

## Call

**Extends Statement**

Executes a call statement

**Properties**

* `arguments` **[Array](#array)&lt;Arguments>**

## Case

**Extends Node**

A switch case statement

**Properties**

* `test` **([Expression](#expression) | null)** if null, means that the default case
* `body` **([Block](#block) | null)**

## Cast

**Extends Operation**

Binary operations

**Properties**

* `type` **[String](#string)**
* `what` **[Expression](#expression)**

## Catch

**Extends Statement**

Defines a catch statement

**Properties**

* `what` **[Array](#array)&lt;[Identifier](#identifier)>**
* `variable` **[Variable](#variable)**
* `body` **[Statement](#statement)**

## Class

**Extends Declaration**

A class definition

**Properties**

* `extends` **([Identifier](#identifier) | null)**
* `implements` **[Array](#array)&lt;[Identifier](#identifier)>**
* `body` **[Array](#array)&lt;[Declaration](#declaration)>**
* `isAnonymous` **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)**
* `isAbstract` **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)**
* `isFinal` **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)**

## ClassConstant

**Extends Constant**

Defines a class/interface/trait constant

**Properties**

* `isStatic` **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)**
* `visibility` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)**

## Clone

**Extends Statement**

Defines a clone call

**Properties**

* `what` **[Expression](#expression)**

## Closure

**Extends Statement**

Defines a closure

**Properties**

* `arguments` **[Array](#array)&lt;[Parameter](#parameter)>**
* `uses` **[Array](#array)&lt;[Variable](#variable)>**
* `type` **[Identifier](#identifier)**
* `byref` **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)**
* `nullable` **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)**
* `body` **([Block](#block) | null)**
* `isStatic` **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)**

## Comment

**Extends Node**

Abstract documentation node (ComentLine or CommentBlock)

**Properties**

* `value` **[String](#string)**

## CommentBlock

**Extends Comment**

A comment block (multiline)

## CommentLine

**Extends Comment**

A single line comment

## Constant

**Extends Declaration**

Defines a namespace constant

**Properties**

* `value` **([Node](#node) | null)**

## ConstRef

**Extends Expression**

A constant reference

**Properties**

* `name` **([String](#string) \| [Node](#node))**

## Continue

**Extends Node**

A continue statement

**Properties**

* `level` **([Number](#number) \| [Null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null))**

## Declaration

**Extends Statement**

A declaration statement (function, class, interface...)

**Properties**

* `name` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)**

### parseFlags

Generic flags parser

**Parameters**

* `flags` **[Array](#array)&lt;Integer>**

Returns **void**

## Declare

**Extends Block**

The declare construct is used to set execution directives for a block of code

**Properties**

* `what` **[Array](#array)&lt;[Expression](#expression)>**
* `mode` **[String](#string)**

### MODE_SHORT

The node is declared as a short tag syntax :

```php
<?php
declare(ticks=1):
// some statements
enddeclare;
```

Type: [String](#string)

### MODE_BLOCK

The node is declared bracket enclosed code :

```php
<?php
declare(ticks=1) {
// some statements
}
```

Type: [String](#string)

### MODE_NONE

The node is declared as a simple statement. In order to make things simpler
children of the node are automatically collected until the next
declare statement.

```php
<?php
declare(ticks=1);
// some statements
declare(ticks=2);
// some statements
```

Type: [String](#string)

## Do

**Extends Statement**

Defines a do/while statement

**Properties**

* `test` **[Expression](#expression)**
* `body` **[Statement](#statement)**

## Echo

**Extends Sys**

Defines system based call

**Properties**

* `shortForm` **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)**

## Empty

**Extends Sys**

Defines an empty check call

## Encapsed

**Extends Literal**

Defines an encapsed string (contains expressions)

**Properties**

* `type` **[String](#string)** Defines the type of encapsed string (shell, heredoc, string)
* `label` **([String](#string) \| [Null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null))** The heredoc label, defined only when the type is heredoc

### TYPE_STRING

The node is a double quote string :

```php
<?php
echo "hello $world";
```

Type: [String](#string)

### TYPE_SHELL

The node is a shell execute string :

```php
<?php
echo `ls -larth $path`;
```

Type: [String](#string)

### TYPE_HEREDOC

The node is a shell execute string :

```php
<?php
echo <<<STR
 Hello $world
STR
;
```

Type: [String](#string)

### TYPE_OFFSET

The node contains a list of constref / variables / expr :

```php
<?php
echo $foo->bar_$baz;
```

Type: [String](#string)

## Entry

**Extends Node**

An array entry - see [Array](#array)

**Properties**

* `key` **([Node](#node) | null)** The entry key/offset
* `value` **[Node](#node)** The entry value

## Error

**Extends Node**

Defines an error node (used only on silentMode)

**Properties**

* `message` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)**
* `line` **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)**
* `token` **([number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) \| [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String))**
* `expected` **([string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) \| [array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array))**

## Eval

**Extends Statement**

Defines an eval statement

**Properties**

* `source` **[Node](#node)**

## Exit

**Extends Statement**

Defines an exit / die call

**Properties**

* `status` **([Node](#node) | null)**
* `useDie` **[Boolean](#boolean)**

## Expression

**Extends Node**

Any expression node. Since the left-hand side of an assignment may
be any expression in general, an expression can also be a pattern.

## For

**Extends Statement**

Defines a for iterator

**Properties**

* `init` **[Array](#array)&lt;[Expression](#expression)>**
* `test` **[Array](#array)&lt;[Expression](#expression)>**
* `increment` **[Array](#array)&lt;[Expression](#expression)>**
* `body` **[Statement](#statement)**
* `shortForm` **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)**

## Foreach

**Extends Statement**

Defines a foreach iterator

**Properties**

* `source` **[Expression](#expression)**
* `key` **([Expression](#expression) | null)**
* `value` **[Expression](#expression)**
* `body` **[Statement](#statement)**
* `shortForm` **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)**

## Function

**Extends Declaration**

Defines a classic function

**Properties**

* `arguments` **[Array](#array)&lt;[Parameter](#parameter)>**
* `type` **[Identifier](#identifier)**
* `byref` **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)**
* `nullable` **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)**
* `body` **([Block](#block) | null)**

## Global

**Extends Statement**

Imports a variable from the global scope

**Properties**

* `items` **[Array](#array)&lt;[Variable](#variable)>**

## Goto

**Extends Statement**

Defines goto statement

**Properties**

* `label` **[String](#string)**

## Halt

**Extends Statement**

Halts the compiler execution

**Properties**

* `after` **[String](#string)** String after the halt statement

## Identifier

**Extends Node**

Defines an identifier node

**Properties**

* `name` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)**
* `resolution` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)**

### UNQUALIFIED_NAME

This is an identifier without a namespace separator, such as Foo

Type: [String](#string)

### QUALIFIED_NAME

This is an identifier with a namespace separator, such as Foo\\Bar

Type: [String](#string)

### FULL_QUALIFIED_NAME

This is an identifier with a namespace separator that begins with
a namespace separator, such as \\Foo\\Bar. The namespace \\Foo is also
a fully qualified name.

Type: [String](#string)

### RELATIVE_NAME

This is an identifier starting with namespace, such as namespace\\Foo\\Bar.

Type: [String](#string)

## If

**Extends Statement**

Defines a if statement

**Properties**

* `test` **[Expression](#expression)**
* `body` **[Block](#block)**
* `alternate` **([Block](#block) \| [If](#if) | null)**
* `shortForm` **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)**

## Include

**Extends Statement**

Defines system include call

**Properties**

* `target` **[Node](#node)**
* `once` **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)**
* `require` **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)**

## Inline

**Extends Literal**

Defines inline html output (treated as echo output)

## Interface

**Extends Declaration**

An interface definition

**Properties**

* `extends` **[Array](#array)&lt;[Identifier](#identifier)>**
* `body` **[Array](#array)&lt;[Declaration](#declaration)>**

## Isset

**Extends Sys**

Defines an isset call

## Label

**Extends Node**

A label statement (referenced by goto)

**Properties**

* `name` **[String](#string)**

## List

**Extends Sys**

Defines list assignment

## Literal

**Extends Expression**

Defines an array structure

**Properties**

* `raw` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)**
* `value` **([Node](#node) \| [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) \| [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) \| [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | null)**

## Location

Defines the location of the node (with it's source contents as string)

**Parameters**

* `source`
* `start`
* `end`

**Properties**

* `source` **([String](#string) | null)**
* `start` **[Position](#position)**
* `end` **[Position](#position)**

## Lookup

**Extends Expression**

Lookup on an offset in the specified object

**Properties**

* `what` **[Expression](#expression)**
* `offset` **[Expression](#expression)**

## Magic

**Extends Literal**

Defines magic constant

## Method

**Extends Function**

Defines a class/interface/trait method

**Properties**

* `isAbstract` **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)**
* `isFinal` **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)**
* `isStatic` **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)**
* `visibility` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)**

## Namespace

**Extends Block**

The main program node

**Properties**

* `name` **[String](#string)**
* `withBrackets` **[Boolean](#boolean)**

## New

**Extends Statement**

Creates a new instance of the specified class

**Properties**

* `what` **([Identifier](#identifier) \| [Variable](#variable) \| [Class](#class))**
* `arguments` **[Array](#array)&lt;Arguments>**

## Node

A generic AST node

**Parameters**

* `kind`
* `docs`
* `location`

**Properties**

* `loc` **([Location](#location) | null)**
* `leadingComments` **[Array](#array)&lt;[Comment](#comment)>**
* `kind` **[String](#string)**

### extends

Helper for extending the Node class

**Parameters**

* `constructor` **[Function](#function)**

Returns **[Function](#function)**

## String

**Extends Literal**

Defines a nowdoc string

**Properties**

* `label` **[String](#string)**
* `raw` **[String](#string)**
* `quote` **[Boolean](#boolean)**

## String

**Extends Literal**

Defines a string (simple ou double quoted) - chars are already escaped

**Properties**

* `isDoubleQuote` **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)**

## Number

**Extends Literal**

Defines a numeric value

## OffsetLookup

**Extends Lookup**

Lookup on an offset in an array

## Operation

**Extends Expression**

Defines binary operations

## Parameter

**Extends Declaration**

Defines a function parameter

**Properties**

* `type` **([Identifier](#identifier) | null)**
* `value` **([Node](#node) | null)**
* `byref` **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)**
* `variadic` **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)**
* `nullable` **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)**

## Parenthesis

**Extends Operation**

Parenthesis encapsulation `(... expr ...)`

**Properties**

* `inner` **[Expression](#expression)**

## Position

Each Position object consists of a line number (1-indexed) and a column number (0-indexed):

**Parameters**

* `line`
* `column`
* `offset`

**Properties**

* `line` **[Number](#number)**
* `column` **[Number](#number)**
* `offset` **[Number](#number)**

## Post

**Extends Operation**

Defines a post operation `$i++` or `$i--`

**Properties**

* `type` **[String](#string)**
* `what` **[Variable](#variable)**

## Pre

**Extends Operation**

Defines a pre operation `++$i` or `--$i`

**Properties**

* `type` **[String](#string)**
* `what` **[Variable](#variable)**

## Print

**Extends Sys**

Outputs

## Program

**Extends Block**

The main program node

**Properties**

* `errors` **[Array](#array)&lt;[Error](#error)>**

## Property

**Extends Declaration**

Defines a class property

**Properties**

* `isFinal` **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)**
* `isStatic` **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)**
* `visibility` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)**
* `value` **([Node](#node) | null)**

## PropertyLookup

**Extends Lookup**

Lookup to an object property

## RetIf

**Extends Statement**

Defines a short if statement that returns a value

**Properties**

* `test` **[Expression](#expression)**
* `trueExpr` **[Expression](#expression)**
* `falseExpr` **[Expression](#expression)**

## Return

**Extends Node**

A continue statement

**Properties**

* `expr` **([Expression](#expression) | null)**

## Silent

**Extends Statement**

Avoids to show/log warnings & notices from the inner expression

**Properties**

* `expr` **[Expression](#expression)**

## Statement

**Extends Node**

Any statement.

## Static

**Extends Statement**

Declares a static variable into the current scope

**Properties**

* `items` **([Array](#array)&lt;[Variable](#variable)> | [Array](#array)&lt;[Assign](#assign)>)**

## StaticLookup

**Extends Lookup**

Lookup to a static property

## Switch

**Extends Statement**

Defines a switch statement

**Properties**

* `test` **[Expression](#expression)**
* `body` **[Block](#block)**
* `shortForm` **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)**

## Sys

**Extends Statement**

Defines system based call

**Properties**

* `arguments` **[Array](#array)&lt;[Node](#node)>**

## Throw

**Extends Statement**

Defines a throw statement

**Properties**

* `what` **[Expression](#expression)**

## Trait

**Extends Declaration**

A trait definition

**Properties**

* `extends` **([Identifier](#identifier) | null)**
* `implements` **[Array](#array)&lt;[Identifier](#identifier)>**
* `body` **[Array](#array)&lt;[Declaration](#declaration)>**

## TraitAlias

**Extends Node**

Defines a trait alias

**Properties**

* `trait` **([Identifier](#identifier) | null)**
* `method` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)**
* `as` **([string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | null)**
* `visibility` **([string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | null)**

## TraitPrecedence

**Extends Node**

Defines a trait alias

**Properties**

* `trait` **([Identifier](#identifier) | null)**
* `method` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)**
* `instead` **[Array](#array)&lt;[Identifier](#identifier)>**

## TraitUse

**Extends Node**

Defines a trait usage

**Properties**

* `traits` **[Array](#array)&lt;[Identifier](#identifier)>**
* `adaptations` **([Array](#array)&lt;[Node](#node)> | null)**

## Try

**Extends Statement**

Defines a try statement

**Properties**

* `body` **[Block](#block)**
* `catches` **[Array](#array)&lt;[Catch](#catch)>**
* `allways` **[Block](#block)**

## Unary

**Extends Operation**

Unary operations

**Properties**

* `type` **[String](#string)**
* `what` **[Expression](#expression)**

## Unset

**Extends Sys**

Deletes references to a list of variables

## UseGroup

**Extends Statement**

Defines a use statement (with a list of use items)

**Properties**

* `name` **([String](#string) | null)**
* `type` **([String](#string) | null)** Possible value : function, const
* `item` **[Array](#array)&lt;[UseItem](#useitem)>**

## UseItem

**Extends Statement**

Defines a use statement (from namespace)

**Properties**

* `name` **[String](#string)**
* `type` **([String](#string) | null)** Possible value : function, const
* `alias` **([String](#string) | null)**

### TYPE_CONST

Importing a constant

Type: [String](#string)

### TYPE_FUNC

Importing a function

Type: [String](#string)

## Variable

**Extends Expression**

Any expression node. Since the left-hand side of an assignment may
be any expression in general, an expression can also be a pattern.

**Properties**

* `name` **([String](#string) \| [Node](#node))** The variable name (can be a complex expression when the name is resolved dynamically)
* `byref` **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** Indicate if the variable reference is used, ex `&$foo`
* `curly` **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** Indicate if the name is defined between curlies, ex `${foo}`

**Examples**

```javascript
// PHP code :
&$foo
// AST output
{
 "kind": "variable",
 "name": "foo",
 "byref": true,
 "curly": false
}
```

## variadic

**Extends Expression**

Introduce a list of items into the arguments of the call

**Properties**

* `what` **([Array](#array) \| [Expression](#expression))**

## While

**Extends Statement**

Defines a while statement

**Properties**

* `test` **[Expression](#expression)**
* `body` **[Statement](#statement)**
* `shortForm` **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)**

## Yield

**Extends Expression**

Defines a yield generator statement

**Properties**

* `value` **([Expression](#expression) \| [Null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null))**
* `key` **([Expression](#expression) \| [Null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null))**

## YieldFrom

**Extends Expression**

Defines a yield from generator statement

**Properties**

* `value` **[Expression](#expression)**

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// parameter decorator
function ParameterDecorator(target, // The prototype of the class
propertyKey, // The name of the method
parameterIndex // The index of parameter in the list of the function's parameters
) {
    console.log("ParameterDecorator called on: ", target, propertyKey, parameterIndex);
}
var ParameterDecoratorExample = /** @class */ (function () {
    function ParameterDecoratorExample() {
    }
    ParameterDecoratorExample.prototype.method = function (param1, param2) {
    };
    __decorate([
        __param(0, ParameterDecorator), __param(1, ParameterDecorator)
    ], ParameterDecoratorExample.prototype, "method");
    return ParameterDecoratorExample;
}());
// output
//ParameterDecorator called on: { method: [Function] } method 1
//ParameterDecorator called on: { method: [Function] } method 0
///////////////////////////////////////////////////////////////////////////////
// Class Decorator with parameters
function ClassDecoratorParams(param1, param2) {
    return function (target // The class the decorator is declared on
    ) {
        console.log("ClassDecoratorParams(" + param1 + ", '" + param2 + "') called on: ", target);
    };
}
var ClassDecoratorParamsExample = /** @class */ (function () {
    function ClassDecoratorParamsExample() {
    }
    ClassDecoratorParamsExample = __decorate([
        ClassDecoratorParams(1, "a"),
        ClassDecoratorParams(2, "b")
    ], ClassDecoratorParamsExample);
    return ClassDecoratorParamsExample;
}());
// output:
// ClassDecoratorParams(2, 'b') called on:  function ClassDecoratorParamsExample() {
//     }
// ClassDecoratorParams(1, 'a') called on:  function ClassDecoratorParamsExample() {
//     }
///////////////////////////////////////////////////////////////////////////////
// Method Decorator
function MethodDecorator(target, // The prototype of the class
propertyKey, // The name of the method
descriptor) {
    console.log("MethodDecorator called on: ", target, propertyKey, descriptor);
}
var MethodDecoratorExample = /** @class */ (function () {
    function MethodDecoratorExample() {
    }
    MethodDecoratorExample.prototype.method = function () {
    };
    __decorate([
        MethodDecorator
    ], MethodDecoratorExample.prototype, "method");
    return MethodDecoratorExample;
}());
// output:
// MethodDecorator called on:  { method: [Function] } method { value: [Function],
//   writable: true,
//   enumerable: true,
//   configurable: true }
function TypeRestrictedMethodDecorator(target, // The prototype of the class
propertyKey, // The name of the method
descriptor) {
    console.log("TypeRestrictedMethodDecorator called on: ", target, propertyKey, descriptor);
}
var TypeRestrictedMethodDecoratorExample = /** @class */ (function () {
    function TypeRestrictedMethodDecoratorExample() {
    }
    TypeRestrictedMethodDecoratorExample.prototype.method = function (num) {
        return 0;
    };
    __decorate([
        TypeRestrictedMethodDecorator
    ], TypeRestrictedMethodDecoratorExample.prototype, "method");
    return TypeRestrictedMethodDecoratorExample;
}());
// output:
// TypeRestrictedMethodDecorator called on:  { method: [Function] } method { value: [Function],
//   writable: true,
//   enumerable: true,
//   configurable: true }

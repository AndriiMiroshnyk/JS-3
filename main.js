"use strict";

//№1

const isEmpty = (object) => {
    const objectKeys = Object.keys(object);
    if (objectKeys.length === 0) {
        return true;
    }
    return !objectKeys.filter((key) => object[key] || object[key] === 0 || object[key] === false).length;
};

const data = { a: 1, b: undefined };
const data2 = { a: undefined };
console.log(isEmpty(data)); // false
console.log(isEmpty(data2)); // true

//№2
const isEqualDeep = (firstObj, secondObj) => {
    const areObjects = typeof firstObj === 'object' && typeof secondObj === 'object';
    const areNotNull = firstObj !== null && secondObj !== null;
    if (areObjects && areNotNull) {
        for (let key in firstObj) {
            if (!firstObj.hasOwnProperty(key)) return false;
            if (Object.keys(firstObj).length !== Object.keys(secondObj).length) return false;
            if (typeof firstObj[key] === 'object' && typeof secondObj[key] === 'object') {
                const result = isEqualDeep(firstObj[key], secondObj[key]);
                if (!result) return false;
            } else {
                if (firstObj[key] !== secondObj[key]) return false;
            }
        }
        return true;
    } else {
        return firstObj === secondObj;
    }
};

const dataDeep = { a: 1, b: { c: 1 } };
const data2Deep = { a: 1, b: { c: 1 } };
const data3Deep = { a: 1, b: { c: 2 } };
console.log(isEqualDeep(dataDeep, data2Deep)); // true
console.log(isEqualDeep(dataDeep, data3Deep)); // false

//№3

const intersection = (firstObject, secondObject) => {
    const newObject = {};
    const areObjects = typeof firstObject === 'object' && typeof secondObject === 'object';
    const areNotNull = firstObject !== null && secondObject !== null;
    if (areObjects && areNotNull) {
        for (let key in firstObject) {
            const areStrings = typeof firstObject[key] === 'string' && typeof secondObject[key] === 'string';
            const areNumbers = typeof firstObject[key] === 'number' && typeof secondObject[key] === 'number';
            if (areStrings || areNumbers) {
                if (firstObject[key] === secondObject[key]) newObject[key]=firstObject[key];
            }
        }
    }
    return newObject;
};

const dataIntersection = { a: 1, b: 2 };
const data2Intersection = { c: 1, b: 2 };
console.log(intersection(dataIntersection, data2Intersection)); // { b: 2 }

import { compiler } from './const';
import C from './testes';
import * as http from 'http';



let obj1 = { a: 1, b: 2, c: 3 };

let spread = { ...obj1, b: 4 };

console.log(spread);
console.log((new C).m());

// -------------------------------


function hello(compiler: string) {
    console.log(`1. Hellooooo, from ${compiler}`);
}

function t() {
    return new Promise((resolve: any) => {
        setTimeout(function() {
            resolve();
        }, 300);
    });
}

// hello(compiler);

// t().then(() => console.log('foi!;)'));

function openFile(): Promise<object> {
    return new Promise((resolve, reject) => {        
        let fakeFile = { fileId: Math.round(Math.random()*999) }
        let fakeError = { code: -44, error: 'File not found' }

        // forçar o catch
        // setTimeout(reject, 1000, fakeError);

        setTimeout(resolve, 1000, fakeFile);
    });
}

function readFile(file: object|null): Promise<object> {
    return new Promise(resolve => {
        let attachedContentToFile = Object.assign({}, file, { content: 'blá, blá, ..' })
        setTimeout(resolve, 1000, attachedContentToFile);
    });
}

async function processFile() {
    let fileDescriptor = await openFile();
    let fileContent = await readFile(fileDescriptor);
    return fileContent;
}

async function parallelFile() {
    let [fileDescriptor, fileContent] = [await openFile(), await readFile(null)];
    return Object.assign({}, fileDescriptor, fileContent);
}

// parallelFile()
//     .then(file => console.log(file))
//     .catch(err => console.error(err));
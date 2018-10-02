// Read file / blob as text, return a promise

// Wraps FileReader.readAsText in a promise
export const readAsText = blob => {
    const myreader = new FileReader();

    return new Promise((resolve, reject) => {
        myreader.onload = event => resolve(myreader.result);
        myreader.onerror = err => reject(err);

        myreader.readAsText(blob);
    });
};

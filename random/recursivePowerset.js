function printSubsetsRecursively(input, prefix) {
    if (input === '') {
        console.log(prefix);
        return;
    }

    printSubsetsRecursively(input.slice(1, input.length), prefix + input[0]);
    printSubsetsRecursively(input.slice(1, input.length), prefix);    
}

printSubsetsRecursively('abc', '');

let n = 5;

for (let i = 1; i <= n; i++) {
    let row = "";
    
    for (let j = 1; j <= i; j++) {
        row += "* ";
    }
    
    console.log(row);
}


for (let i = 1; i <= n; i++) {
    let row = "";

    // spaces
    for (let j = 1; j <= n - i; j++) {
        row += " ";
    }

    // stars
    for (let k = 1; k <= (2 * i - 1); k++) {
        row += "*";
    }

    console.log(row);
}

// Upper half
for (let i = 1; i <= n; i++) {
    let row = "";

    // spaces
    for (let j = 1; j <= n - i; j++) {
        row += " ";
    }

    // stars
    for (let k = 1; k <= (2 * i - 1); k++) {
        row += "*";
    }

    console.log(row);
}

// Lower half
for (let i = n - 1; i >= 1; i--) {
    let row = "";

    // spaces
    for (let j = 1; j <= n - i; j++) {
        row += " ";
    }

    // stars
    for (let k = 1; k <= (2 * i - 1); k++) {
        row += "*";
    }

    console.log(row);
}
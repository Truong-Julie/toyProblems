var convert = function(s, numRows) {
    var results = [];
    var storage = [];
    var currentArray = [];
    var down = true;
    var index = 0;
    
    if (numRows < 2) {
        return s;
    } else if (numRows === 2) {
        for (let i = 0; i < s.length; i++) {
            currentArray.push(s[i]);
            index++;
            if (index === 2) {
                storage.push(currentArray);
                currentArray = [];
                index = 0;
            }
        }
    } else {
        

    for (let i = 0; i < s.length; i++) {
        
        if (down) {
            currentArray.push(s[i]);
            if (index < numRows - 1) {
                index++;
            } else {
                storage.push(currentArray);
                currentArray = [];
                down = false;
                index--;
            }
        } else {
           currentArray = Array(numRows);
           currentArray[index] = s[i];
           storage.push(currentArray);
           currentArray = [];
           if (index === 1) {
               down = true;
               index = 0;
           } else {
              index--; 
           }
          
        }
    }
    
    }
    if (currentArray.length > 0) {
        storage.push(currentArray);
    }
    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < storage.length; j++) {
            results.push(storage[j][i]);
        }
    }
    return results.join('');
};

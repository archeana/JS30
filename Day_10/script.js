const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

// idea is to select several checkboxes at the same time by clicking on the first and last (and selecting whatever is in the middle)

let lastChecked;


function handleCheck(e) {
    let inBetween = false;
    //Check if the shift key is down 
    if (e.shiftKey && this.checked) {
        // and check that they are checking it 
        // loop over every single checkbox
        checkboxes.forEach(checkbox => {
            console.log(checkbox);
            if (checkbox === this || checkbox === lastChecked) {
                inBetween = !inBetween;
                console.log('Starting to check them in between!');
            }

            if (inBetween) {
                checkbox.checked = true;
            }
        });
    }

    lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));
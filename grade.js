

function gradeCal(marks){
    if (marks==undefined || isNaN(marks)|| marks<0 ||marks>100) {
        
        console.log(`invalid marks ${marks}`);
    } else {
        console.log(`valid marks ${marks}`);
        if (marks>=90) {
            console.log('grade A+');
            
        } else {
            if (marks>=75 && marks<90) {
            
                console.log('grade A');

            
        } else {if (marks>=50 && marks<75) {
            console.log('grade B');
            
        } else {
            
        }
            
        }

            
        }
        
    }

}

gradeCal(undefined);
gradeCal(null);
gradeCal(NaN)
gradeCal('kartik')
gradeCal(120);
gradeCal('20')
gradeCal(-25)

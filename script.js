const form=document.querySelector('form');
// console.log(form)
form.addEventListener('submit', function(e){
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#results');
    // console.log(height, typeof(height));

    if(height === '' || height < 0 || isNaN(height)){
        result.innerHTML = "Please Enter Valid Height";
        result.style.color="red";
    }else if(weight==='' || weight < 0 || isNaN(weight)){
        result.innerHTML = "Please Enter Valid Weight";
        result.style.color="red";
    }else{
        const BMI = (weight / ((height * height) / 10000)).toFixed(2);
        //result display
        // result.innerHTML = `Your BMI is : ${BMI}`;
        if(BMI < 18.6){
            result.innerHTML = `Your BMI is : ${BMI}<br>
                                 You are Underweight`;
            result.style.color = "red";
        }else if(BMI >= 18.6 && BMI <= 24.9){
            result.innerHTML = `Your BMI is : ${BMI}<br>
                                 Your Weight is Normal`;
            result.style.color="lightgreen";
        }else if(BMI >= 25 && BMI <= 29.9){
            result.innerHTML = `Your BMI is : ${BMI}<br>
                                 You are Overweight`;
            result.style.color = "red";
        }else{
            result.innerHTML = `Your BMI is : ${BMI}<br>
                                 You are Obese!!!`;
            result.style.color = "red";
        }
    }
})

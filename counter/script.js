let count = 0;

const displayValue = document.getElementById("value");

const btns = document.querySelectorAll(".btn");

btns.forEach(function(btn) {
  btn.addEventListener("click", function(e) {
       const styles = e.currentTarget.classList;

       if(styles.contains("decs")) {
        count--;
       }
       else if(styles.contains("incs")) {
        count++;
       }
       else {
        count = 0;
       }
      if(count>0) {
        displayValue.style.color = "green";
      }
      if(count<0) {
        displayValue.style.color = "red";
      }
      if(count === 0) {
        displayValue.style.color = "#222"
      }

       displayValue.textContent = count;
  })
});

console.log("LifeLink Website Started ❤️");
let alreadyExists = donors.some(d => d.phone === phone);

if(alreadyExists){

  alert("Donor already registered ❤️");

}else{

  donors.push(donor);

  localStorage.setItem("donors", JSON.stringify(donors));

  alert("Donor Registered Successfully ❤️");

}
<script>

function registerDonor(){

  let name = document.getElementById("name").value;

  let phone = document.getElementById("phone").value;

  let blood = document.getElementById("blood").value;

  let location = document.getElementById("location").value;

  let donor = {

    name:name,
    phone:phone,
    blood:blood,
    location:location

  };

  let donors =
  JSON.parse(localStorage.getItem("donors")) || [];

  let alreadyExists =
  donors.some(d => d.phone === phone);

  if(alreadyExists){

    alert("Donor already registered ❤️");

  }else{

    donors.push(donor);

    localStorage.setItem(
      "donors",
      JSON.stringify(donors)
    );

    alert("Donor Registered Successfully ❤️");

    window.location.href = "donors.html";

  }

}

</script>
function clearDonors(){

  localStorage.removeItem("donors");

  alert("All donors deleted ❤️");

  location.reload();

}s
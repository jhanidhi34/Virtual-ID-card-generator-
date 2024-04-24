const form = document.getElementById("cardForm");
    const cardImage = document.getElementById("cardImage");
    const cardName = document.getElementById("cardName");
    const cardLocation = document.getElementById("cardLocation");
    const cardCollegeName= document.getElementById("cardCollegename");
    


    form.addEventListener("submit", function(event) {
      event.preventDefault();

      const name = document.getElementById("name").value;
      const collegeName = document.getElementById("collegename").value;
      
      const Location = document.getElementById("location").value;
      const image = document.getElementById("uploadImage").files[0];

      // Display details on the right side of the page
      cardImage.src = URL.createObjectURL(image);
      cardName.textContent = name;
      cardLocation.textContent="Location: " + Location;
      cardCollegeName.textContent= "College Name: " + collegeName;
      
    });
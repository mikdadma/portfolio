function sendMail(){
    var params={
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        text: document.getElementById("text").value
    }

    const serviceId ="service_ir413d9";
    const templateId="template_c54hnt3"

    emailjs.send(serviceId,templateId,params)
    .then(
        res =>{
            document.getElementById("name").value ="";
             document.getElementById("email").value="";
              document.getElementById("text").value="";
              console.log(res);
              alert("your message sent successfully")
        }
    )
    .catch(err=>console.log(err))
}
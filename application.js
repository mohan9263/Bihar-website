function showDocuments(){

let type = document.getElementById("educationType").value;

let box = document.getElementById("documents");


if(type=="12th"){


box.innerHTML = `

<h3>12th Based Admission Documents</h3>


<label>Upload 10th Marksheet</label>
<input type="file">


<label>Upload 12th Marksheet</label>
<input type="file">


<label>Upload Admission Letter</label>
<input type="file">


<label>Upload Bank Passbook</label>
<input type="file">


`;

}



else if(type=="10th"){


box.innerHTML = `

<h3>10th Based Admission Documents</h3>


<label>Upload 10th Marksheet</label>
<input type="file">


<label>Upload Diploma / Polytechnic Admission Proof</label>
<input type="file">


<label>Upload Course Certificate</label>
<input type="file">


<label>Upload Bank Passbook</label>
<input type="file">


`;

}


else{

box.innerHTML = "";

}

}
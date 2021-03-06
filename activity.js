

LoadRegion();

function LoadDetail(id) {
   
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "Activity.aspx/LoadDetail",
        dataType: "json",
        //  data: "{}",
        data: '{ "id" : "' + id + '"}', //advAmnt strINV tax1 tax2
        success: function (data) {
            var jsdata = JSON.parse(data.d);
            var ro = "";


            $.each(jsdata, function (key, value) {
                document.getElementById("txtName").value = value.Name;
                document.getElementById("txtfname").value = value.fname;
                document.getElementById("txtcity").value = value.city;
                
                
                document.getElementById("lblID").innerHTML = id;
                document.getElementById("btnSave").innerHTML = "Update";

            });

        },
        error: function (result) {
            alert(result);
        }


    });
}

function LoadRegion() {
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "Activity.aspx/LoadRegion",
        dataType: "json",
        data: "{}",
        success: function (data) {
            var jsdata = JSON.parse(data.d);
            var ro = "";

            if ($('#dt-basic-example').length != 0) {

                $('#dt-basic-example').remove();
            }

            ro = "<table id='dt-basic-example'class='table table-sm  dataTable dtr-inline table-hover' ><thead class='thead-themed'> <th>Title</th><th style='text-align:center;'>Action</th></thead><tbody>";
            $.each(jsdata, function (key, value) {

                ro += "<tr><td   class='two' style='width:80%;'>" + value.Name + "</td> <td   class='two' style='width:80%;'>" + value.fname + "</td> <td   class='two' style='width:80%;'>" + value.city + "</td><td style='text-align:center;width:20%;'><button class='btn buttons-selected btn-primary btn-sm mr-1' tabindex='0' aria-controls='dt-basic-example' type='button'  onclick='LoadDetail(\"" + value.ID + "\");'><span><i class='fal fa-edit mr-1'></i> Select</span></button><button class='btn buttons-selected btn-danger btn-sm mr-1' tabindex='0' aria-controls='dt-basic-example' type='button'  onclick='DeleteData(\"" + value.ID + "\");'><span><i class='fal fa-times mr-1'></i> Delete</span></button></td></tr>";

            });
            ro = ro + "</tbody></table>";

            $("#DivRegion").append(ro);

        },
        error: function (result) {
            alert(result);
        }


    });
}

function Cancel() {
    document.getElementById("txtid").value = "";
    document.getElementById("txtName").value = "";
    document.getElementById("txtfname").value = "";
    document.getElementById("txtCity").value = "";
    
    document.getElementById("lblID").innerHTML = "";
    document.getElementById("btnSave").innerHTML = "Submit";
}

function InsertData() {

    var ID = document.getElementById('txtid').value;
    var Name = document.getElementById('txtName').value;
    var fname = document.getElementById('txtfname').value;
    var city = document.getElementById('txtCity').value; 
    var UserID = localStorage.getItem("UserID");
        $.ajax({
            type: 'POST',
            url: 'Activity.aspx/SaveTransaction',
            data: {},
            data: '{ "Name" : "' + Name + '","txtfname" : "' + fname + '","txtCity" : "' + city + '", ""UserID" : "' + UserID + '" }',
            //advAmnt strINV tax1 tax2
            
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            success: function (ms) {
                vN = msg.d;
                alert(vN);
                LoadRegion();
            }

        });
       

}

function UpdateData() {
    var Name = document.getElementById('txtName').value;
    var fname = document.getElementById('txtfname').value;
    

    
    
    var id = document.getElementById("lblID").innerHTML;
    var UserID = localStorage.getItem("UserID");
    $.ajax({
        type: 'POST',
        url: 'Activity.aspx/UpdateTransaction',
        //data: {},
        data: '{ "Name" : "' + Name + '","txtfname" : "' + fname + '", ""UserID" : "' + UserID + '" }', //advAmnt strINV tax1 tax2
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        success: function (msg) {
            vN = msg.d;
            alert(vN);
            LoadRegion();
        }

    });


}


function DeleteData(id) {
    var UserID = localStorage.getItem("UserID");
    $.ajax({
        type: 'POST',
        url: 'Activity.aspx/DeleteTransaction',
        //data: {},
        data: '{  "id" : "' + id + '","UserID" : "' + UserID + '" }', //advAmnt strINV tax1 tax2
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        success: function (msg) {
            vN = msg.d;
            alert(vN);
            LoadRegion();
        }

    });


}

function SaveData() { 
    if ($("#btnSave").text() == "Submit") {
       
        InsertData();
    }
    else if ($("#btnSave").text() == "Update") {      
        UpdateData();
    } 
    Cancel();
 

}
$(document).ready(function () {
    $('#dt-basic-example').dataTable(
                {
                    responsive: true
                });

    $('.js-thead-colors a').on('click', function () {
        var theadColor = $(this).attr("data-bg");
        console.log(theadColor);
        $('#dt-basic-example thead').removeClassPrefix('bg-').addClass(theadColor);
    });

    $('.js-tbody-colors a').on('click', function () {
        var theadColor = $(this).attr("data-bg");
        console.log(theadColor);
        $('#dt-basic-example').removeClassPrefix('bg-').addClass(theadColor);
    });

});

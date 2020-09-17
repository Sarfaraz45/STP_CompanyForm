<%@ Page Title="" Language="C#" MasterPageFile="~/HR/MasterPage.master" AutoEventWireup="true" CodeFile="Activity.aspx.cs" Inherits="HR_Default" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
    <script src="jquery.min.js" type="text/javascript"></script>
    <script src="jquery-1.8.2.js" type="text/javascript"></script>
   

</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
    <asp:ScriptManager ID="ScriptManager1" runat="server"></asp:ScriptManager>
    <main id="js-page-content" role="main" class="page-content">
                        <ol class="breadcrumb page-breadcrumb">
                            <li class="breadcrumb-item"><a href="javascript:void(0);">SmartAdmin</a></li>
                            <li class="breadcrumb-item">Tables</li>
                            <li class="breadcrumb-item active">Generate Table Style</li>
                            <li class="position-absolute pos-top pos-right d-none d-sm-block"><span class="js-get-date"></span></li>
                        </ol>
                        <div class="subheader">
                            <h1 class="subheader-title">
                                <i class='subheader-icon fal fa-edit'></i> Add Activity
                            </h1>
                        </div>
                     
                          <label  id="lblID" style="display:none;"></label>
     
                         <div class="row">
                            <div class="col-xl-12">
                                <div id="panel-1" class="panel">
                                    <div class="panel-hdr">
                                        <h2>
                                            Activity Information 
                                        </h2>

                                        <div class="panel-toolbar">
                                            <button class="btn btn-panel" data-action="panel-collapse" data-toggle="tooltip" data-offset="0,10" data-original-title="Collapse"></button>
                                            <button class="btn btn-panel" data-action="panel-fullscreen" data-toggle="tooltip" data-offset="0,10" data-original-title="Fullscreen"></button>
                                            <button class="btn btn-panel" data-action="panel-close" data-toggle="tooltip" data-offset="0,10" data-original-title="Close"></button>
                                        </div>
                                    </div>
                                    <div class="panel-container show">
                                        <div class="panel-content">      
                                      
                                            <form>
                                                
                                                  <div class="row">
                                                  <div class="col-md-6">
                                                <div class="form-group">
                                                    <label class="form-label" for="example-palaceholder">COMP_ID</label>
                                                    <input type="text" class="form-control" placeholder="" id="txtid" autocomplete="off">
                                                </div>
                                                </div>
                                                <div class="col-md-6">
                                                <div class="form-group">
                                                    <label class="form-label" for="example-select">NAME</label>
                                                    <input type="text" class="form-control" placeholder="Type Company Name here" id="txtName" autocomplete="off">
                                                </div>
                                                </div>
                                                </div>
                                                <div class="row" style="height:20px;"></div>
                                                <div class="row">
                                                  <div class="col-md-6">
                                                <div class="form-group">
                                                    <label class="form-label" for="example-palaceholder">fname</label>
                                                    <input type="text" class="form-control" placeholder="Type Phone Number" id="txtfname" autocomplete="off">
                                                   
                                                </div>
                                              

                                                </div>
                                                
                                                <div class="col-md-6">
                                                <div class="form-group">
                                                    <label class="form-label" for="example-select">city</label>
                                                    <input type="text" class="form-control" placeholder="Type Phone Number2" id="txtCity" autocomplete="off">
                                                   
                                                </div>
                                                </div>

                                                  
                                               </div>
                                                <div class="row" style="height:20px;"></div>

                                                 <div class="row">
                                                
                                                

                                                 <div class="col-md-6">
                                                <div class="form-group">
                                                    <label class="form-label" for="example-select">PHONE_3</label>
                                                    <input type="text" class="form-control" placeholder="Type Phone Number3" id="txtPhone3" autocomplete="off">
                                                   
                                                </div>
                                                </div>

                                                 <div class="col-md-6">
                                                <div class="form-group">
                                                    <label class="form-label" for="example-select">CONTACT_PERSON</label>
                                                    <input type="text" class="form-control" placeholder="Type Contact Number" id="txtContactPerson" autocomplete="off">
                                                   
                                                </div>
                                                </div>
                                                </div>

                                                <div class="row" style="height:20px;"></div>

                                                 <div class="row">
                                                
                                                

                                                 <div class="col-md-6">
                                                <div class="form-group">
                                                    <label class="form-label" for="example-select">CONTACT_NO</label>
                                                    <input type="text" class="form-control" placeholder="Type Contact Number" id="txtContactNo" autocomplete="off">
                                                   
                                                </div>
                                                </div>

                                                 <div class="col-md-6">
                                                <div class="form-group">
                                                    <label class="form-label" for="example-select">ADDRESS_1</label>
                                                    <input type="text" class="form-control" placeholder="Type First Address" id="txtAddress1" autocomplete="off">
                                                   
                                                </div>
                                                </div>
                                                </div>

                                                <div class="row" style="height:20px;"></div>

                                                 <div class="row">
                                                
                                                

                                                 <div class="col-md-6">
                                                <div class="form-group">
                                                    <label class="form-label" for="example-select">ADDRESS_2</label>
                                                    <input type="text" class="form-control" placeholder="Type second Address" id="txtAddress2" autocomplete="off">
                                                   
                                                </div>
                                                </div>

                                              
                                                </div>
                                                <div class="row" style="height:20px;"></div>

                                                                    
                                                 <div class="form-group" style="text-align:right;">
                                             <button type="button" id="btnSave" class="btn btn-success waves-effect waves-themed" onclick="SaveData();">Submit</button>
                                        <%--     <button type="button" class="btn btn-danger waves-effect waves-themed">Delete</button>--%>
                                             <button type="button" id="btnClear" class="btn btn-warning waves-effect waves-themed" onclick="Cancel();">Cancel</button>
                                             </div>
                                               
                                            
                                            </form>
                                                                         
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>

                            
                          
                        </div>

                          <div class="row">
                            <div class="col-xl-12">
                                <div id="Div1" class="panel">
                                    <div class="panel-hdr">
                                        <h2>
                                            Activity List
                                        </h2>

                                        <div class="panel-toolbar">
                                            <button class="btn btn-panel" data-action="panel-collapse" data-toggle="tooltip" data-offset="0,10" data-original-title="Collapse"></button>
                                            <button class="btn btn-panel" data-action="panel-fullscreen" data-toggle="tooltip" data-offset="0,10" data-original-title="Fullscreen"></button>
                                            <button class="btn btn-panel" data-action="panel-close" data-toggle="tooltip" data-offset="0,10" data-original-title="Close"></button>
                                        </div>
                                    </div>

                                    <div class="panel-container show">
                                        <div class="panel-content">                                          
                                            <form>
                                                
                                                <div class="form-group" id="DivRegion">
                                                    
                                                </div>
                                                </form></div></div>
                                    </div>
                                    </div></div>
                    </main>
    <script src="Activity.js" type="text/javascript"></script> 
         
</asp:Content>



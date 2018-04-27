///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//    CLIENT ADD PAGE //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Quick add form


$(document).ready(function () {

    var urlParams = GetURLParams();

    var contact = urlParams['contact']; //type number
    var client = urlParams['client'];   //type number
    var legal = urlParams['legal'];     //type number
    var contOrg;
    // var urlRoot = 'http://office-management-demo.herokuapp.com/';
    var urlRoot = 'http://35.202.86.61/office-management/';

    $('.nameofBusiness').attr('disabled',true);

    $('#file3').on('change',function(){
        $('#stat_document').val($(this).val().substr($(this).val().indexOf(String.fromCharCode(92),4)+1));
    });

    if(contact!=undefined||client!=undefined){
        if(contact){
            $.ajax({
                url:urlRoot+'contacts/'+contact+'/',
                type:'GET',
                datatype:'JSON',
                success:function(data){
                    contOrg = data.contact_organisation.organisation.id;
                    client_organisation();
                }
            });

        }else if(client){
            if(legal){
                var legalText;
                if(legal== 1 ){
                    legalText='individuals';
                }else if(legal == 2){
                    legalText = 'hufs';
                }else if(legal == 3){
                    legalText = 'proprietors';
                }else if(legal == 4){
                    legalText = 'partnership-firms';
                }else if(legal == 5){
                    legalText = 'llps';
                }else if(legal == 6){
                    legalText = 'limited-companies';
                }else if(legal == 7){
                    legalText = 'aop-boi';
                }else if(legal == 8){
                    legalText = 'trusts';
                }
                $.ajax({
                    url:urlRoot+'clients/'+legalText+'/'+client,
                    type:'GET',
                    datatype:'JSON',
                    success:function(data){
                        var commencement_date = $.datepicker.formatDate("dd/mm/yy", new Date(data.commencement_date));
                        $('#client_legalstatus').val(legal).trigger('change');
                        $('#PANNO').val(data.pan_no);
                        if(legal==1){
                            $('#individual_aadhar').val(data.aadhar_no);
                            contOrg = 1//data.prospect;
                            client_organisation();
                            console.log('legal'+ legal +'-'+contOrg+'-org id');
                        }else{
                            $('#GSTIN').val(data.gstin);
                            $('#TANNO').val(data.tan_no);
                            
                            if(legal == 2){
                                $('#client_legalstatus').val(legal).trigger('change');
                                $('#HUF_date').val(commencement_date);
                                $('#HUF_nameOfKarta').val(data.karta_name);
                                contOrg = data.prospect;
                                client_organisation();
                                console.log('legal'+ legal +'-'+contOrg+'-org id');
                            }else if(legal == 3){
                                $('#client_legalstatus').val(legal).trigger('change');
                                $('#prop_Title').val(data.title.id);
                                var name = data.owner_name.split(' ');
                                $('#Proprietor_fname').val(name[0]);
                                $('#Proprietor_mname').val(name.length==2?'':name[1]);
                                $('#Proprietor_lname').val(name[length-1]);
                                $('#Proprietor_dateOfComm').val(commencement_date);
                                contOrg = data.prospect;
                                client_organisation();
                            
                            }else if(legal == 4){
                                $('#client_legalstatus').val(legal).trigger('change');
                                $('#Partnership_date').val($.datepicker.formatDate("dd/mm/yy", new Date(data.partnership_deed_date)));
                                $('#Proprietor_dateOfComm').val(commencement_date);
                                AddPartner(data.partners);
                                contOrg = data.prospect;
                                client_organisation();
                            }else if(legal == 5){
                                $('#client_legalstatus').val(legal).trigger('change');
                                var other_Partners = "";
                                for (var i = 0; i < data.other_partners.length; i++) {
                                    other_Partners += data.other_partners[i].name+", ";
                                }
                                $('#partners_noopartner').val(other_Partners);
                                $('#LLP_LLPIN').val(data.llpin);
                                $('#LLP_date').val(commencement_date);
                                AddDPartner(data.designated_partners);
                                contOrg = data.prospect;
                                client_organisation();
                            }else if(legal == 6){
                                $('#client_legalstatus').val(legal).trigger('change');
                                $('#company_date').val(commencement_date);
                                $('#company_types').val(company_type).trigger('change');
                                $('#company_cin').val(data.cin);
                                $('#company_listedy').prop('checked',stock_exchange_listed);
                                $('#company_stock').val(stock_exchange_name);
                                AddDirector(data.directors);
                                contOrg = data.prospect;
                                client_organisation();
                            }else if(legal == 7){
                                $('#client_legalstatus').val(legal).trigger('change');
                                $('#members').val(data.members.name.join(','));
                                $('#AOP_date').val(commencement_date);
                                $('#AOP_registration').val(data.registration_no);    
                                contOrg = data.prospect;
                                client_organisation();
                            }else if(legal == 8){
                                $('#client_legalstatus').val(legal).trigger('change');
                                $('#trust_doc').val(commencement_date);
                                $('#trusteeName').val(data.trustee);
                                contOrg = data.prospect;
                                client_organisation();
                                // $('#trust_name').val(data.);
                            }
                    }
                    console.log('Client data Added');
                    },
                    error:function(){
                        swal('Cannot find Client');
                    }
                });
            }
        }
    }
    ///////////////////////////////////////////////// Organisation Code

    var currentOrganisationsId;
    //searching list for organisations
    $(document).on('click','#search_organisations',function(event){
        //event.preventDefault();
        var searchOrgKeyword = $('#searchOrgKeyword').val();

        if(searchOrgKeyword != ""){
        $.ajax({
            url:urlRoot+"organisations/?name="+searchOrgKeyword,
            method:'GET',
            datatype:'JSON',
            success:function(orgList){
                
                if(orgList.length){
                    var display2 = ' ';
                    for (i = 0; i < orgList.length; i++) {
                        
                        display2 += `
                        <div class='col-xs-12 col-sm-12'>
                        <div class='col-xs-4 col-sm-4 f-s-12'>${i+1}</div>
                        <div class='col-xs-4 col-sm-4 f-s-12 yellow-line'>${orgList[i].name}</div>
                        <div class='col-xs-3 col-sm-3 f-s-12'>${orgList[i].group}</div>
                        <div class='col-xs-1 col-sm-1 orgClick' id='${orgList[i].id}'><b><i class='button btn-default btn-flat icon-check fg-yellow darker-2 hvr-box-shadow-outset p-5'></i></b></div>
                        </div><span class='col-xs-12 col-sm-12 p-5'></span>
                        `;
                    }
                    $('#orgList').html(display2);
                    $('#organisation-modal').modal('show');
                }else{
                    swal('Organisation cannot be found!!!');
                }

            },
            error:function(error){
                swal('Cannot fetch Organisation List');
                console.log(error.responseText);
            }
        });
        }else{
            swal('search cannot be empty!!!');
        }

    });


    window.client_organisation = function (){
        if($(this).attr('id')){
            var orgId = $(this).attr('id');
        }else if(contOrg){
            var orgId = contOrg;
        }else{
            var orgId = updatedOrgId;
        }
        
    $.ajax({
            url:urlRoot+'organisations/'+orgId +'/',
            type:'GET',
            contentType:'application/json',
            datatype:'JSON',
            success:function(data){

                $('.nameofBusiness').val(data.name);
                $('#website').val(data.website);
                $('#client_group').val(data.group).trigger('change');
                $('#businessType').val(data.business_types).trigger('change');
                $('#industryType').val(data.industry_types).trigger('change');
                $('#nature_business').val(data.business_natures).trigger('change');
                var multiBrns = data.branches
                $('#hoaddress-row .new').each(function(index){
                    if(index>0){
                        $(this).remove();
                    }
                });
            
                for(let i=0; i < multiBrns.length; i++){
                    if(i > 0){
                        // addAddresses();
                        addBranchRows();
                        // $('#hoaddress-row .new:last .hoaddress_from').attr('id',multiBrns[i].id);
                        $('#branch-row .new:last .branch_name').val(multiBrns[i].name);
                        $('#branch-row .new:last .branch_address').val(multiBrns[i].address);
                        // $('#hoaddress-row .new:last .hoaddress_isHO').attr('checked',multiBrns[i].is_head_office);
                    }else{
                        // $('#hoaddress-row .new .hoaddress_from').attr('id',multiBrns[i].id);
                        $('#branch-row .new .branch_name').val(multiBrns[i].name);
                        $('#branch-row .new .branch_address').val(multiBrns[i].address);
                        // $('#hoaddress-row .new .hoaddress_isHO').attr('checked',multiBrns[i].is_head_office);
                    }
                }
                currentOrganisationsId = data.id;
                $('#editOrganisation').attr('oid',currentOrganisationsId).removeAttr('disabled');
                $('#organisation-modal').modal('hide');

            },
            error:function(error){
                swal('Contact\'s Organisations cannot be fetched!!');
                console.log(error.responseText);
            }
        });
    }


    var currentClientId;
    $(document).on('click','.orgClick',client_organisation);

    $(document).on('click','#editOrganisation',function(){
        currentOrganisationsId = $(this).attr('oid');
        currentClientId = client;
        // var url = "addOrganisation.html?id="+currentOrganisationsId+'&cid='+currentContactsId;
        window.open("addOrganisation.html?id="+currentOrganisationsId+'&ctid='+currentClientId, "","menubar=0,titlebar=0,status=0,resizable=1,top=100,left=100,width=800,height=450");
        // $(location).attr('href',url);
    });

    $(document).on('click','.addNewOrg',function(){
        window.open('addOrganisation.html?ctid='+client,'',"menubar=0,titlebar=0,status=0,resizable=1,top=100,left=100,width=800,height=450");
    });


    //////////////////////////////////////////////////

    $.ajax({
        url: urlRoot+'organisations/groups',
        datatype: 'JSON',
        type: 'GET',
        success: function (groups) {
            for (var i = 0; i < groups.length; i++) {
                $('#client_group').append('<option value=' + groups[i].id + '>' + groups[i].group + '</option>');
            }
        }
    });

    
    //PopulateStates('#state');
    $.ajax({
        url: urlRoot+'organisations/form-data',
        datatype: 'JSON',
        type: 'GET',
        success: function (data) {
            glob = data;
            for (var i = 0; i < data.business_natures.length; i++) {
                $('#nature_business').append('<option value=' + data.business_natures[i].id + '>' + data.business_natures[i].business_nature + '</option>');
            }

            for (var i = 0; i < data.industry_types.length; i++) {
                $('#industryType').append('<option value=' + data.industry_types[i].id + '>' + data.industry_types[i].industry_type + '</option>');
            }

            for (var i = 0; i < data.business_types.length; i++) {
                $('#businessType').append('<option value=' + data.business_types[i].id + '>' + data.business_types[i].business_type + '</option>');
            }
            console.log('Company Prefilled data Added.')

        },
        error: function (data) {
            swal('Server is not working:' + data);
        }
    });



    //auto filling forms prefilled data
    $.ajax({
        url: urlRoot+'contacts/form-data',
        datatype: 'JSON',
        type: 'GET',
        success: function (data) {
            // glob2 = data;
            for (var i = 0; i < data.titles.length; i++) {
                $('.selTitle').append('<option value=' + data.titles[i].id + '>' + data.titles[i].title + '</option>');
            }

            for (var i = 0; i < data.categories.length; i++) {
                $('.contactnumber_category').append('<option value=' + data.categories[i].id + '>' + data.categories[i].category + '</option>');
                $('.email_category').append('<option value=' + data.categories[i].id + '>' + data.categories[i].category + '</option>');
                $('.address_category').append('<option value=' + data.categories[i].id + '>' + data.categories[i].category + '</option>');
            }

            for (var i = 0; i < data.services.length; i++) {
                $('#services').append('<option value=' + data.services[i].id + '>' + data.services[i].service + '</option>');
            }

            for(var i = 0; i < data.genders.length; i++){
                $('#clientsContact_Gender').append('<option value=' + data.genders[i].id + '>' + data.genders[i].gender + '</option>');
            }

            console.log('Pre filled data added!!!');
        },
        error: function (data) {
            swal('Server is not working:' + data);
        }
    });

    // Convert to client has been selected
    var currentOrganisationsId;
    if (contact != undefined && contact != '') {
        $.ajax({
            url: urlRoot+'contacts/' + contact,
            datatype: 'JSON',
            type: 'GET',
            success: function (contact) {
                //Fill the form with details about the contact
                AddBranch(contact.contact_organisation.organisation.branches);

                $('.selTitle').val(contact.title);

                var ns = breakName(contact.name);
                $('.inpFirstName').val(ns.firstName);
                $('.inpMiddleName').val(ns.middleName);
                $('.inpLastName').val(ns.lastName);

                var formattedDate = $.datepicker.formatDate("dd/mm/yy", new Date(contact.dob));
                $('.inputdob').val(formattedDate);

                $('#website').val(contact.contact_organisation.website);

                $('#Proprietor_name').val(contact.contact_organisation.organisation.name);
                $('#LLP_name').val(contact.contact_organisation.organisation.name);
                $('#company_name').val(contact.contact_organisation.organisation.name);
                $('#AOP_name').val(contact.contact_organisation.organisation.name);
                $('#trust_name').val(contact.contact_organisation.organisation.name);

                $('#trust_name').val(contact.contact_organisation.organisation.name);

                $('#nature_business').val(contact.contact_organisation.organisation.business_natures);
                $('#industryType').val(contact.contact_organisation.organisation.industry_types);
                $('#businessType').val(contact.contact_organisation.organisation.business_types);
                currentOrganisationId = contact.contact_organisation.organisation.id;
            }
        });
    }

    //Client is being edited
    // if (client != undefined && client != '') {
    //     $.ajax({
    //         url: 'http://office-management-demo.herokuapp.com/clients/' + client,
    //         datatype: 'JSON',
    //         type: 'GET',
    //         success: function (client) {
    //             //Fill the form with details about the client
    //             AddPhone(client.phone_numbers);
    //             AddEmail(client.email_addresses);
    //             AddAddress(client.address);
    //             AddPhone(contact.phone_numbers);
    //             AddEmail(contact.email_addresses);
    //             AddAddress([contact.address]);
    //             AddBranch(contact.contact_organisation.organisation.branches);

    //             $('.selTitle').val(client.title);
    //             var ns = breakName(client.name);
    //             $('.inpFirstName').val(ns.firstName);
    //             $('.inpMiddleName').val(ns.middleName);
    //             $('.inpLastName').val(ns.lastName);
    //             $('.inputdob').val(client.dob);
    //             $('#website').val(client.contact_organisation.website);
    //             $('#Proprietor_name').val(client.client_organisation.name);
    //             $('#LLP_name').val(client.client_organisation.name);
    //             $('#company_name').val(contact.contact_organisation.name);
    //             $('#AOP_name').val(client.contact_organisation.name);
    //             $('#trust_name').val(client.contact_organisation.name);
    //             $('#trust_name').val(client.contact_organisation.name);
    //             $('#nature_business').val(client.business_natures);
    //             $('#industryType').val(client.industry_types);
    //             $('#businessType').val(client.business_types);
    //         }
    //     });
    // }

    //get POC for the selected group
    // $('#client_group').on('change', function () {
    //     var selectedGroup = $('#client_group').find('option:selected').text();

    //     $.ajax({
    //         url: 'http://office-management-demo.herokuapp.com/contacts',
    //         datatype: 'JSON',
    //         type: 'GET',
    //         data: 'group=' + selectedGroup,
    //         success: function (contacts) {
    //             //Fill these contacts in 'Contact Person' table
    //             if (contacts.length > 0) {
    //                 for (var c = 0; c < contacts.length; c++) {
    //                     var cont = contacts[c];

    //                     AddContactPerson(cont.id, cont.title, cont.name, cont.email_addresses[0], cont.phone_numbers[0], '',cont.contact_organisation.designation, '');
    //                 }
    //             }
    //         },
    //         error(err) {
    //             console.log(err);
    //         }
    //     });
    // });

    //checkbox option(if yes)
    if ($('#company_listed').val() === 'yes') {
        $('company_stock').addClass('hide');
    }
    //client forms legal status - hiding all elements
    function hideclient_elements() {
        $('#tab1 .elem').each(function () {
            $(this).addClass('hide');
        });
    }
    hideclient_elements();
    $('#Individual').removeClass('hide');
    $('.disable_webs').attr('disabled',false);
    // var legal = '1';
    $('#client_legalstatus').on('change', function () {
        var selected = this.value;
        legal = selected;
        hideclient_elements();
        //$('a_branch').removeClass('hide');
        $('.relation_tab').addClass('hide');
        
        if (selected == '1') {
            $('#Individual').removeClass('hide');
            $('.a_branch').addClass('hide');
            $('#companyCommon').addClass('hide');
            $('.relation_tab').removeClass('hide');
            $('.designation_tab').addClass('hide');
            $('.service_tab').addClass('hide');
            $('.organis').addClass('hide');
            $('.disable_webs').attr('disabled',false);
            cC_table.column(5).visible(true);
            cC_table.column(6).visible(false);
            cC_table.column(7).visible(false);

        } else if (selected == '2') {
            $('#HUF').removeClass('hide');
            $('.a_branch').removeClass('hide');
            $('#companyCommon').removeClass('hide');
            $('.relation_tab').addClass('hide');
            $('.designation_tab').removeClass('hide');
            $('.service_tab').removeClass('hide');
            $('.organis').removeClass('hide');
            $('.disable_webs').attr('disabled',true);
            cC_table.column(5).visible(false);
            cC_table.column(6).visible(true);
            cC_table.column(7).visible(true);
        } else if (selected == '3') {
            $('#Proprietor').removeClass('hide');
            $('.a_branch').removeClass('hide');
            $('#companyCommon').removeClass('hide');
            $('.relation_tab').addClass('hide');
            $('.designation_tab').removeClass('hide');
            $('.service_tab').removeClass('hide');
            $('.organis').removeClass('hide');
            $('.disable_webs').attr('disabled',true);
            cC_table.column(5).visible(false);
            cC_table.column(6).visible(true);
            cC_table.column(7).visible(true);
        } else if (selected == '4') {
            $('#PartnershipFirm').removeClass('hide');
            $('.a_branch').removeClass('hide');
            $('#companyCommon').removeClass('hide');
            $('.relation_tab').addClass('hide');
            $('.designation_tab').removeClass('hide');
            $('.service_tab').removeClass('hide');
            $('.organis').removeClass('hide');
            $('.disable_webs').attr('disabled',true);
            cC_table.column(5).visible(false);
            cC_table.column(6).visible(true);
            cC_table.column(7).visible(true);
        } else if (selected == '5') {
            $('#LLP').removeClass('hide');
            $('.a_branch').removeClass('hide');
            $('#companyCommon').removeClass('hide');
            $('.relation_tab').addClass('hide');
            $('.designation_tab').removeClass('hide');
            $('.service_tab').removeClass('hide');
            $('.organis').removeClass('hide');
            $('.disable_webs').attr('disabled',true);
            cC_table.column(5).visible(false);
            cC_table.column(6).visible(true);
            cC_table.column(7).visible(true);
        } else if (selected == '6') {
            $('#Company').removeClass('hide');
            $('.a_branch').removeClass('hide');
            $('#companyCommon').removeClass('hide');
            $('.relation_tab').addClass('hide');
            $('.designation_tab').removeClass('hide');
            $('.service_tab').removeClass('hide');
            $('.organis').removeClass('hide');
            $('.disable_webs').attr('disabled',true);
            cC_table.column(5).visible(false);
            cC_table.column(6).visible(true);
            cC_table.column(7).visible(true);
        } else if (selected == '7') {
            $('#AOP').removeClass('hide');
            $('.a_branch').removeClass('hide');
            $('#companyCommon').removeClass('hide');
            $('.relation_tab').addClass('hide');
            $('.designation_tab').removeClass('hide');
            $('.service_tab').removeClass('hide');
            $('.organis').removeClass('hide');
            $('.disable_webs').attr('disabled',true);
            cC_table.column(5).visible(false);
            cC_table.column(6).visible(true);
            cC_table.column(7).visible(true);
        } else if (selected == '8') {
            $('#trust').removeClass('hide');
            $('.a_branch').removeClass('hide');
            $('#companyCommon').removeClass('hide');
            $('.relation_tab').addClass('hide');
            $('.designation_tab').removeClass('hide');
            $('.service_tab').removeClass('hide');
            $('.organis').removeClass('hide');
            $('.disable_webs').attr('disabled',true);
            cC_table.column(5).visible(false);
            cC_table.column(6).visible(true);
            cC_table.column(7).visible(true);
        } else {
            alert('please select a status');
        }
    });


    //************Multiple entries for phones

    var addContactRow = `
    <div class='new row well'>
        <div class='col-xs-4 col-sm-4'>
            <label class='select'>
                <select class='contactnumber_category select2 editselect'>
                    
                </select>
            </label>
        </div>
        <div class='col-xs-6 col-sm-6'>
            <label class='input'>
                <input type='number' class='addContact_contactNumbers' minlength='9' maxlength='15' placeholder='10 digit number'>
            </label>
        </div>
        <div class='col-xs-2 col-sm-2'>
            <div id='remove-contact' class='text-center text-danger'>
                <span class='centerAlign'><i class='glyphicon glyphicon-remove fa-lg'></i></span>
            </div>
        </div>
    </div>
    `;




    function addContactRows() {
        $('#contact-row')
            .append(addContactRow);
        $('#contact-row .new:last').addClass('zoomInUp animated').show('fast');
        editSelect();

        for (var i = 0; i < glob2.categories.length; i++) {
            $('#contact-row .new:last .contactnumber_category').append('<option value=' + glob2.categories[i].id + '>' + glob2.categories[i].category + '</option>');
        }

    }


    function AddPhone(values) {
        for (let i = 0; i < values.length; i++) {
            if (i > 0) {
                addContactRows();
                $('#contact-row .new:last .contactnumber_category').val(values[i].category); //;
                $('#contact-row .new:last .addContact_contactNumbers').val(parseInt(values[i].number.toString().slice(3), 10));
                // console.log(multiNums[i].number);
            } else {
                $('#contact-row .new .contactnumber_category').val(values[i].category); //;
                $('#contact-row .new .addContact_contactNumbers').val(parseInt(values[i].number.toString().slice(3), 10));
            }
        }
    }

    $('#addcontact').on('click', addContactRows);


    $('#contact-row').on('click', '#remove-contact', function () {
        $(this).parents('.new').remove();
    });

    $(document).on('change', ".phonenumber_valid", function () {
        var inputvalues = $(this).val();
        var phoneformat = new RegExp('^[0-9]{10}$');

        if (phoneformat.test(inputvalues)) {
            return true;
        } else {
            swal('Wrong Format', 'Please Enter Valid Phone Number', 'error');
            $(this).val('');
            $(this).focus();
        }

    });
    //******************End - Multiple entries for phones


    //**************Multiple entries for email
    var addEmailRow = `
        <div class='new row well'>
            <div class='col-xs-4 col-sm-4'>
                <label class='select'>
                    <select class='email_category select2 editselect'>
                        
                    </select>
                </label>
            </div>
            <div class='col-xs-6 col-sm-6'>
                <label class='input'>
                    <input type='email' class='addContact_emailIds email_valid' placeholder='e.g. abc@gmail.com/'>
                </label>
            </div>
            <div class='col-xs-2 col-sm-2'>
                <div id='remove-email' class='text-center text-danger'>
                    <span class='centerAlign'><i class='glyphicon glyphicon-remove fa-lg'></i></span>
                </div>
            </div>
        </div>
        `;


    function addEmailRows() {
        $('#email-row')
            .append(addEmailRow);
        $('#email-row .new:last').addClass('zoomInUp animated').show('fast');
        editSelect();

        for (var i = 0; i < glob2.categories.length; i++) {
            $('#email-row .new:last .email_category').append('<option value=' + glob2.categories[i].id + '>' + glob2.categories[i].category + '</option>');
        }
    }

    function AddEmail(values) {
        for (let i = 0; i < values.length; i++) {
            if (i > 0) {
                addEmailRows();
                $('#email-row .new:last .email_category').val(values[i].category);
                $('#email-row .new:last .addContact_emailIds').val(values[i].email);
            } else {
                $('#email-row .new .email_category').val(values[i].category);
                $('#email-row .new .addContact_emailIds').val(values[i].email);
            }
        }
    }
    $('#addEmail').on('click', addEmailRows);



    $('#email-row').on('click', '#remove-email', function () {
        $(this).parents('.new').remove();
    });
    //************** End - Multiple entries for email





    //***************** multiple entries for address

    var addAddressRow = `
        <div class="row new well">
            <div class="col-sm-2">
                <label class="select">
                    <select class="select2 editselect address_category"></select>
                </label>
            </div>
            <div class="col-sm-3">
            <label class="textarea textarea-expandable">
                    <textarea class=address_street rows="3"></textarea>
            </label>
            </div>
            <div class="col-sm-2">
                <label class="input">
                    <input class="address_state=" type="text">
                </label>
            </div>
            <div class="col-sm-2">
                <label class="input">
                    <input class="address_city" type="text">
                </label>
            </div>
            <div class="col-sm-2">
                <label class="input">
                    <input class="address_pincode" type="number" >
                </label>
            </div>
            <div class="col-sm-1">
                <div id="remove-address" class="text-center text-danger">
                    <span class="centerAlign p-t-10">
                        <i class="glyphicon glyphicon-remove fa-lg"></i>
                    <span>
                </div>
            </div>
        </div>
    `;


    function addAddressRows() {
        $('#address-row')
            .append(addAddressRow);
        $('#address-row .new:last').addClass('zoomInUp animated').show('fast');
        editSelect();

        for (var i = 0; i < glob2.categories.length; i++) {
            $('#address-row .new:last .address_category').append('<option value=' + glob2.categories[i].id + '>' + glob2.categories[i].category + '</option>');
        }
    }



    function AddAddress(values) {
        for (let i = 0; i < values.length; i++) {
            var address = breakAddress(values[i]);
            if (i > 0) {
                addAddressRows();
                $('#address-row .new:last .address_category').val(values[i].category); //;
                $('#address-row .new:last .address_street').val(address.StreetAddress);
                $('#address-row .new:last .address_state').val(address.State);
                $('#address-row .new:last .address_city').val(address.City);
                $('#address-row .new:last .address_pincode').val(address.Pincode);


                // console.log(multiNums[i].number);
            } else {
                $('#address-row .new .address_category').val(values[i].category); //;
                $('#address-row .new .address_street').val(address.StreetAddress);
                $('#address-row .new .address_state').val(address.State);
                $('#address-row .new .address_city').val(address.City);
                $('#address-row .new .address_pincode').val(address.Pincode);

            }
        }
    }

    $('#add_maddress').on('click', addAddressRows);


    $('#address-row').on('click', '#remove-address', function () {
        $(this).parents('.new').remove();
    });
    //******************End - Multiple entries for address


    //**********Add branch in client
    var addbranch = `
        <div class="new row well">
        <div class="col-sm-3">
            <label class="input">
            <input id="branch_name" class="branch_name" type="text">
            </label>
        </div>
        <div class="col-sm-4">
            <label class="textarea textarea-expandable">
            <textarea id="branch_address" class="branch_address" type="text"></textarea>
            </label>
        </div>
        <div class="col-sm-4">
            <label class="input">
            <input id="branch_GSTIN" class="branch_gst gstinnumber" type="number">
            </label>
        </div>
        <div class="col-sm-1">
            <div id="removebranch" class="text-center text-danger">
                <span class="centerAlign p-t-10">
                    <i class="glyphicon glyphicon-remove fa-lg"></i>
                <span>
            </div>
        </div>
        </div>
        `;

    function addBranchRows() {
        $('#branch-row')
            .append(addbranch);
        $('#branch-row .new:last').addClass('zoomInUp animated').show('fast');
        editSelect();
    }

    function AddBranch(values) {
        for (let i = 0; i < values.length; i++) {
            if (i > 0) {
                addBranchRows();
                $('#branch-row .new:last .branch_name').val(values[i].name); //;
                $('#branch-row .new:last .branch_address').val(values[i].address);
                // $('#branch-row .new:last .branch_gst').val(address.State);
                // $('#branch-row .new:last .branch_phone').val(address.City);
                // $('#branch-row .new:last .branch_email').val(address.Pincode);


                // console.log(multiNums[i].number);
            } else {
                $('#branch-row .new .branch_name').val(values[i].name); //;
                $('#branch-row .new .branch_address').val(values[i].address);
                // $('#branch-row .new .branch_gst').val(address.State);
                //$('#branch-row .new .branch_phone').val(address.City);
                // $('#branch-row .new .branch_email').val(address.Pincode);

            }
        }
    }



    $('#addbranch').on('click', addBranchRows);

    $('#branch-row').on('click', "#removebranch", function () {
        $(this).parents('.new').remove();
    });


    //****** End - Add Branch */


    ///***********Add partners
    var addpartner = `
    <div class="new row well">
        <div class="col-sm-6">
            <label class="input">
                <input class="partnerName" type="text">
            </label>
        </div>
        <div class="col-sm-5">
            <label class="input">
                <input class="partnershare" type="number" min="1" max="100">
            </label>
        </div>
        <div class="col-sm-1">
            <div id="removepartner" class="text-center text-danger">
                <i class="glyphicon glyphicon-remove m-t-13 fa-lg"></i>
            </div>
        </div>
    </div>`;



    function addPartnerRows() {
        $('#partner-row')
            .append(addpartner);
        $('#partner-row .new:last').addClass('zoomInUp animated').show('fast');
        editSelect();
    }

    function AddPartner(values) {
        for (let i = 0; i < values.length; i++) {
            if (i > 0) {
                addPartnerRows();
                $('#partner-row .new:last .partnerName').val(values[i].name);
                $('#partner-row .new:last .partnershare').val(values[i].share);
                
            } else {
                $('#partner-row .new .partnerName').val(values[i].name);
                $('#partner-row .new .partnershare').val(values[i].share);

            }
        }
    }


    $('#addpartners').on('click', addPartnerRows);

    $('#partner-row').on('click', "#removepartner", function () {
        $(this).parents('.new').remove();
    });




    //Multple entries for directors
    var addirector =
        `<div class="new row well">
        <div class="col-sm-5">
            <label class="input">
            <input class="company_directors" id="company_directors" type="text">
            </label>
        </div>
        <div class="col-sm-5">
            <label class="input">
                <input class="company_din_directors din_valid" id="company_din_directors" type="number" >
            </label>
        </div>
        <div class="col-sm-1">
            <div id="removedirector" class="text-center text-danger">
                    <i class="glyphicon glyphicon-remove fa-lg"></i>
                </div>
            </div>
        </div>
        `;



    function addDirectorRows() {
        $('#director-row')
            .append(addirector);
        $('#director-row .new:last').addClass('zoomInUp animated').show('fast');
        editSelect();


    }

    function AddDirector(values) {
        for (let i = 0; i < values.length; i++) {
            if (i > 0) {
                addDirectorRows();
                $('#director-row .new:last .company_directors').val(values[i].name); //;
                $('#director-row .new:last .company_din_directors').val(values[i].din);
                // console.log(multiNums[i].number);
            } else {
                $('#director-row .new .company_directors').val(values[i].name); //;
                $('#director-row .new .company_din_directors').val(values[i].din);
            }
        }
    }

    $('#addDirectors').on('click', addDirectorRows);

    $('#director-row').on('click', '#removedirector', function () {
        $(this).parents('.new').remove();
    });


    //multple entries for details of designation partners
    var designatedPartner =
        `<div class="row new well">
            <div class="col-sm-6">
                    <label class="input">
                    <input id="LLP_designatedpartner" class="LLP_designatedpartner" type="text">
                    </label>
            </div>
            <div class="col-sm-5">
                    <label class="input">
                    <input id="LLP_din_designatedpartner" class="LLP_din_designatedpartner" type="number" max="9" min="7">
                    </label>
            </div>
            <div class="col-sm-1 text-center text-danger">
                    <span id="remove-Dpartner">
                        <i class="glyphicon glyphicon-remove fa-lg m-t-15"></i> 
                    </span>
            </div>
        </div>
        `;

    function addDPartnerRows() {
        $('#dpartner-row')
            .append(designatedPartner);
        $('#dpartner-row .new:last').addClass('zoomInUp animated').show('fast');
        editSelect();
    }

    function AddDPartner(values) {
        for (let i = 0; i < values.length; i++) {
            if (i > 0) {
                addDPartnerRows();
                $('#dpartner-row .new:last .LLP_designatedpartner').val(values[i].name); //;
                $('#dpartner-row .new:last .LLP_din_designatedpartner').val(values[i].din);
                // $('#branch-row .new:last .branch_gst').val(address.State);
                // $('#branch-row .new:last .branch_phone').val(address.City);
                // $('#branch-row .new:last .branch_email').val(address.Pincode);


                // console.log(multiNums[i].number);
            } else {
                $('#dpartner-row .new .LLP_designatedpartner').val(values[i].name); //;
                $('#dpartner-row .new .LLP_din_designatedpartner').val(values[i].din);
                // $('#branch-row .new .branch_gst').val(address.State);
                //$('#branch-row .new .branch_phone').val(address.City);
                // $('#branch-row .new .branch_email').val(address.Pincode);

            }
        }
    }

    $('#addDpartners').on('click', addDPartnerRows);

    $('#dpartner-row').on('click', '#remove-Dpartner', function () {
        $(this).parents('.new').remove();
    });


    //if listed
    $('#company_listedy').on('change', function () {
        if ($(this).is(':checked')) {
            $('.nofE').removeClass('hide');
        } else {
            $('.nofE').addClass('hide');
        }
    });


    //Datatable for POC tab in AddClient
    var cC_table = $('#clientsContact_datatable').DataTable({
        // 'ajax': '/lab/jquery-datatables-checkboxes/ids-arrays.txt',
        columnDefs: [{
                orderable: false,
                className: 'select-checkbox',
                targets: 0
            },
            {
                "targets": [1],
                "visible": false,
            },
            {
                "targets": [6],
                "visible": false,
            },
            {
                "targets": [7],
                "visible": false,
            }
        ],
        select: {
            style: 'os',
            selector: 'td:first-child'
        },
        order: [
            [4, 'asc']
        ]
    });

    var ctid;
    $(document).on('change','.selected',function(){
        ctid = cC_table.rows('.selected').data()[0][1];
        alert('changed');
    });

    $('#add_clientsContact').on('click', function () {
        if(legal==undefined){
            legal=$('#client_legalstatus').val();
        }
        window.open('quick_Add_contact.html?legalStatus='+legal+'&method=Add','',"menubar=0,titlebar=0,status=0,resizable=1,top=100,left=100,width=800,height=450");
    });

    var pocObjArr = [];
    window.AddContactPerson = function(id, title, Name, email, phone, relation, designation, purpose,legal ,pocObj) {

        if (legal == 1) {
            pocObjArr.push(pocObj);
            cC_table.row.add([
                '',
                id,
                title+' '+Name,
                email,
                phone,
                relation,
                '',
                '',
                '<div class="text-center text-danger cc_remove"><i class="glyphicon glyphicon-remove"></i></div>'
            ]).draw(false);
        } else {
            pocObjArr.push(pocObj);
            cC_table.row.add([
                '',
                id,
                title+' '+Name,
                email,  
                phone,
                '',
                designation,
                purpose,
                '<div class="text-center text-danger cc_remove"><i class="glyphicon glyphicon-remove"></i></div>'
            ]).draw(false);
        }
    }

    $('#clientsContact_datatable tbody').on('click', 'div.cc_remove', function () {
        swal({
                title: "Are you sure?",
                text: "You want to delete this record!!",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
            .then((willDelete) => {
                if (willDelete) {
                    var cid = cC_table.row($(this).parent()).data()[1];
                    
                    $.ajax({
                        url: "https://office-management-demo.herokuapp.com/contacts/" +cid+'/',
                        type: 'DELETE',
                        datatype: "JSON",
                        success: function (data) {
                            swal('Contact has been deleted!!');
                        }
                    });
                    
                    cC_table.row($(this).parents('tr')).remove().draw();
                    swal("Poof! Your record has been deleted!", {
                        icon: "success",
                    });
                } else {
                    swal("The selected row is not deleted!");
                }
            });
    });

    var stat_docs = $('#statDocs').DataTable({
        // 'ajax': '/lab/jquery-datatables-checkboxes/ids-arrays.txt',
        columnDefs: [{
            orderable: false,
            className: 'select-checkbox2',
            targets: 0
        }],
        select: {
            style: 'multi',
            selector: 'td:first-child'
        },
        order: [
            [1, 'asc']
        ]
    });

    $('#submit_addmore').on('click', function () {
        var name = $('#stat_name').val();
        var number = $('#stat_number').val();
        var issuingAuthority = $('#stat_issuingAuthority').val();
        var validFrom = $('#stat_validFrom').val();
        var validTo = $('#stat_validTo').val();
        var applicable = $('#stat_applicable').val();

        stat_docs.row.add([
            '<td class=" select-checkbox"></td>',
            name,
            number,
            issuingAuthority,
            validFrom,
            validTo,
            applicable,
            '<div class="sD_remove text-danger text-center"><i class="glyphicon glyphicon-remove"></i></div>'
        ]).draw(false);

        $('#statDocs tbody').on('click', 'div.sD_remove', function () {
            swal({
                    title: "Are you sure?",
                    text: "Once deleted, you will not be able to recover this imaginary file!",
                    icon: "warning",
                    buttons: true,
                    dangerMode: true,
                })
                .then((willDelete) => {
                    if (willDelete) {
                        stat_docs.row($(this).parents('tr')).remove().draw();
                        swal("The Selected row has been deleted!", {
                            icon: "success",
                        });
                    } else {
                        swal("The selected row is not deleted!");
                    }
                });
        });

        swal("Row added", "Look in the above table!", "success");
    });

    //adding row for satutory document
    $('#show_addmore').click(function () {
        $('#document_form').removeClass('hide');
    });
    $('#close_addmore').click(function () {
        $('#document_form').addClass('hide');
    });

    //adding Service in client
    $('#addService').on('click', function () {
        $('#service').append(`
            <div id="newservice" class="row well">
                <div class="col-md-4">
                    <label class="select" id=" ">
                        <select class="select2 editselect">
                            <option>#</option>
                        </select>
                    </label>
                </div>

                <div class="col-md-4">
                    <label class="select" id="">
                        <select class="select2">
                            <option>#</option>
                        </select>
                    </label>
                </div>
                <div class="col-md-3">
                    <label class="input">
                        <input type="text" name="Org_name" placeholder="">
                    </label>
                </div>
                <div id="removeService" class="col-md-1">
                    <label class="m-l-20 m-t-10">
                        <span ><i class="glyphicon glyphicon-remove fa-lg text-danger"></i></span>
                    </label>
                </div>
            </div>
            `);
        $('#service').children('div:last').addClass('zoomInUp animated').show('fast');
        editSelect();
    });

    $('#service').on('click', '#removeService', function () {
        $(this).parent('#newservice').remove();
    });


    var dirs;
    getDirectorsRow=function(){
        var directors=[];
        $('#director-row .new').each(function(index) {
            dirs = new Object();
            dirs['name'] = $(this).find('.company_directors').val();
            dirs['din'] = $(this).find('.company_din_directors').val();
            directors.push(dirs);
        });
        return directors;
    }

    var parss;
    getPartnersRow=function(){
        var partnerInShare=[];
        $('#partner-row .new').each(function(index) {
            parss = new Object();
            parss['name'] = $(this).find('.partnerName').val();
            parss['share'] = $(this).find('.partnershare').val();
            partnerInShare.push(parss);
        });
        return partnerInShare;
    }

    var pars;
    getDpartnersRow=function(){
        var dPartners=[];
        $('#dpartner-row .new').each(function(index) {
            pars = new Object();
            pars['name'] = $(this).find('.LLP_designatedpartner').val();
            pars['din'] = $(this).find('.LLP_din_designatedpartner').val();
            dPartners.push(pars);
        });
        return dPartners;
    }

    function validator(){
        var pocIdArr = $('#clientsContact_datatable').DataTable().row().data();
        
        if(pocIdArr == null){
            swal('Please add a POC');
            return false;
        }else{

            var is_Selected = cC_table.row('.selected').data();
            if( is_Selected == null){
                swal('Please select a POC');
                return false;
            }
        }
        if(legal != 1){
            if(currentOrganisationsId == undefined){
                swal('Please select a Organisation');
                return false;
            }
            if(legal == 6){
                var company_type = $('#company_types').val();
                if(company_type == null){
                    swal('Please add a Company');
                    return false;
                }
            }
            if(legal == 4){
                var partners = getPartnersRow();
                if(partners == []){
                    swal('Please add a partner');
                    return false;
                }
            }
        }else if(legal == 1){
            var fname = $('#individual_fname').val();
            var lname = $('#individual_lname').val();
            if(fname == "" || lname == ""){
                swal('Please Enter full Name');
                return false;
            }
        }
        return true;
    }

    //Save Client details in the DB
    var urlRooT = urlRoot+"clients/";
    $(document).on('click', '#clientSubmit', function () {
        var clientData = new Object();
        var url = '';
        var pocIdArr = $('#clientsContact_datatable').DataTable().rows(1).data();
        clientData.send_mail = $('#branch_notify').prop('checked');        

        var valid = validator();
        if(valid){
            if (contact != undefined||client!=undefined) {
                //Updating a client/contact
                var id;
                var id = (contact !=undefined?contact:client);
                var legalStatus = $('#client_legalstatus').val();

                //Create a new client
                clientData.pan_no = $('#PANNO').val();
                clientData.services = [];
                clientData.services.push(1); //Change later
                
                if (legalStatus == 1) {
                    clientData.aadhar_no = $('#individual_aadhar').val();
                    // if (client != undefined){
                    //     clientData.prospect = client;
                    // }else{
                    //     clientData.prospect = contact;
                    // }                                                        no data for prospect

                    var isPrimaryId = cC_table.rows('.selected').data()[0][1];
                    var indexPrimary = pocObjArr.findIndex(x=>x.contact == isPrimaryId);
                    pocObjArr[indexPrimary].is_primary = true;
                    
                    clientData.pocs = pocObjArr;

                    url = urlRooT +  'individuals/';
                    
                } else {

                    clientData.gstin = $('#GSTIN').val();
                    clientData.tan_no = $('#TANNO').val();
                    //Get Branches
                    var isPrimaryId = cC_table.rows('.selected').data()[0][1];
                    var indexPrimary = pocObjArr.findIndex(x=>x.contact == isPrimaryId);
                    pocObjArr[indexPrimary].is_primary = true;

                    clientData.pocs = pocObjArr;
                    clientData.prospect = currentOrganisationsId;
                    if (legalStatus == 2) {//HUF

                        clientData.commencement_date = getFormateDateToServer($('#HUF_date').val());
                        clientData.karta_name = $('#HUF_nameOfKarta').val();
                        // clientData.name = $('#HUF_name').val();
                        // clientData.businessName = $('#HUF_nameofBusiness').val();

                        url = urlRooT +  'hufs/';

                    } else if (legalStatus == 3) {//Proprietor

                        clientData.title = $('#prop_Title').val();
                        clientData.name = $('#Proprietor_fname').val();
                        if ($('#Proprietor_mname').val() != '')
                            clientData.name += ' ' + $('#Proprietor_mname').val();
                        clientData.owner_name += ' ' + $('#Proprietor_lname').val();
                        clientData.commencement_date = getFormateDateToServer($('#Proprietor_dateOfComm').val());

                        // clientData.businessName = $('#Proprietor_name').val();

                        url =   urlRooT +  'proprietors/';

                    } else if (legalStatus == 4) {//Partnership

                        clientData.partnership_deed_date = getFormateDateToServer($('#Partnership_date').val());
                        clientData.commencement_date = getFormateDateToServer($('#Proprietor_dateOfComm').val());
                        clientData.partners = getPartnersRow();
                        //Get Details of Partners
                        // clientData.businessName = $('#Partnership_name').val();

                        url =   urlRooT +  'partnership-firms/';

                    } else if (legalStatus == 5) {//LLP
                        
                        Opartners = $('#partners_noopartner').val().split(',');
                        var oparsObj = [];
                        for (let i = 0; i < Opartners.length-1; i++) {
                            var pars = new Object();
                            pars.name = Opartners[i];
                            oparsObj.push(pars);
                        }
                        clientData.llpin = $('#LLP_LLPIN').val();
                        clientData.commencement_date = getFormateDateToServer($('#LLP_date').val());
                        clientData.other_partners = oparsObj;
                        clientData.designated_partners = getDpartnersRow();
                        // clientData.businessName = $('#LLP_name').val();

                        url =   urlRooT +  'llps/';

                    } else if (legalStatus == 6) {//Company
                        
                        
                        // clientData.businessName = $('#company_name').val();
                        clientData.commencement_date = getFormateDateToServer($('#company_date').val());
                        clientData.company_type = $('#company_types').val();
                        clientData.cin = $('#company_cin').val();
                        clientData.stock_exchange_listed = $('#company_listedy').prop('checked');
                        clientData.stock_exchange_name = $('#company_stock').val();
                        clientData.directors = getDirectorsRow();
                        //Get Details of Directors

                        url =   urlRooT +  'limited-companies/';

                    } else if (legalStatus == 7) {//AOP-BOI
                        
                        var memberArr = $('#members').val();
                        var members = memberArr.split(',');
                        var memObj = [];
                        for (let i = 0; i < members.length; i++) {
                            mem = new Object()
                            mem.name = members[i];
                            memObj.push(mem);
                        }
                        clientData.members = memObj;
                        // clientData.businessName = $('#AOP_name').val();
                        clientData.commencement_date = getFormateDateToServer($('#AOP_date').val());
                        clientData.registration_no = $('#AOP_registration').val();

                        url =   urlRooT +  'aop-boi/';

                    } else if (legalStatus == 8) {//Trusts
                        
                        // clientData.businessName = $('#trust_name').val();
                        clientData.commencement_date = getFormateDateToServer($('#trust_doc').val());
                        clientData.trustee = $('#trusteeName').val();

                        url =   urlRooT +  'trusts/';

                    }
                }
                var clientJSON = JSON.stringify(clientData);
                console.log(clientJSON);

                $.ajax({
                    url: url+''+id+'/',
                    type: 'PUT',
                    contentType: 'application/json',
                    data: clientJSON,
                    success: function (data) {
                        swal('Client updated');
                    },
                    error: function (error) {
                        swal('Not able to create client');
                        console.log('Error in creating client:' + error.responseText);
                    }
                });

            } else {

                var legalStatus = $('#client_legalstatus').val();

                //Create a new client
                clientData.pan_no = $('#PANNO').val();
                clientData.services = [];
                clientData.services.push(1);
                
                if (legalStatus == 1) {//Individuals

                    clientData.aadhar_no = $('#individual_aadhar').val();
                    if (currentClientId != undefined){
                        clientData.prospect = currentClientId;
                    }

                    var isPrimaryId = cC_table.rows('.selected').data()[0][1];
                    var indexPrimary = pocObjArr.findIndex(x=>x.contact == isPrimaryId);
                    pocObjArr[indexPrimary].is_primary = true;
                    
                    clientData.pocs = pocObjArr;

                    url = urlRooT + 'individuals/?';

                    
                } else {

                    clientData.GSTIN = $('#GSTIN').val();
                    clientData.TANNO = $('#TANNO').val();
                    //Get POC
                    var isPrimaryId = cC_table.rows('.selected').data()[0][1];
                    var indexPrimary = pocObjArr.findIndex(x=>x.contact == isPrimaryId);
                    pocObjArr[indexPrimary].is_primary = true;

                    clientData.pocs = pocObjArr;
                    clientData.prospect = currentOrganisationsId;
                    if (legalStatus == 2) {//HUF
                        
                        clientData.commencement_date = getFormateDateToServer($('#HUF_date').val());
                        clientData.karta_name = $('#HUF_nameOfKarta').val();
                        clientData.title = $('#HUF_name').val();

                        url = urlRooT +  'hufs/?';

                    } else if (legalStatus == 3) {//Proprietor
                        
                        clientData.title = $('#prop_Title').val();
                        clientData.owner_name = $('#Proprietor_fname').val();
                        if ($('#Proprietor_mname').val() != '')
                            clientData.owner_name += ' ' + $('#Proprietor_mname').val();
                        clientData.owner_name +=' ' + $('#Proprietor_lname').val();
                        clientData.commencement_date = getFormateDateToServer($('#Proprietor_dateOfComm').val());

                        url =   urlRooT +  'proprietors/?';

                    } else if (legalStatus == 4) {//Partnership
                        
                        clientData.partnership_deed_date = getFormateDateToServer($('#Partnership_date').val());
                        clientData.commencement_date = getFormateDateToServer($('#Partnership_dateOfComm').val());
                        clientData.partners = getPartnersRow();

                        url =   urlRooT +  'partnership-firms/?';

                    } else if (legalStatus == 5) {//LLP
                        
                        Opartners = $('#partners_noopartner').val().split(',');
                        var oparsObj = [];
                        for (let i = 0; i < Opartners.length; i++) {
                            pars = new Object()
                            pars.name = Opartners[i];
                            oparsObj.push(pars);
                        }
                        clientData.llpin = $('#LLP_LLPIN').val();
                        clientData.commencement_date = getFormateDateToServer($('#LLP_date').val());
                        clientData.other_partners = oparsObj;
                        clientData.designated_partners = getDpartnersRow();

                        url =   urlRooT +  'llps/?';

                    } else if (legalStatus == 6) {//Company
                        
                        clientData.commencement_date = getFormateDateToServer($('#company_date').val());
                        clientData.company_type = $('#company_types').val();
                        clientData.cin = $('#company_cin').val();
                        clientData.stock_exchange_listed = $('#company_listedy').prop('checked');
                        clientData.stock_exchange_name = $('#company_stock').val();
                        clientData.directors = getDirectorsRow();
                        
                        url =   urlRooT +  'limited-companies/?';

                    } else if (legalStatus == 7) {//AOP-BOI
                        
                        var memberArr = $('#members').val();
                        var members = memberArr.split(',');
                        var memObj = [];
                        for (let i = 0; i < members.length; i++) {
                            mem = new Object()
                            mem.name = members[i];
                            memObj.push(mem);
                        }
                        clientData.members = memObj;
                        clientData.commencement_date = getFormateDateToServer($('#AOP_date').val());
                        clientData.registration_no = $('#AOP_registration').val();

                        url =   urlRooT +  'aop-boi/?';

                    } else if (legalStatus == 8) {//Trusts
                        
                        // clientData.businessName = $('#trust_name').val();
                        clientData.commencement_date = $('#trust_doc').val();
                        clientData.trustee = $('#trusteeName').val();

                        url =   urlRooT +  'trusts/?';

                    }
                }

                var clientJSON = JSON.stringify(clientData);
                console.log(clientJSON);
                
                
                $.ajax({
                    url: url,
                    type: 'POST',
                    contentType: 'application/json',
                    data: clientJSON,
                    success: function (data) {
                        swal('Client added');
                    },
                    error: function (error) {
                        swal('Not able to create client');
                        console.log('Error in creating client:' + error.responseText);
                    }
                });
            }
        }
    });
});
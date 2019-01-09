/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

$(function(){
    // var ip='http://192.168.1.206';
    var ip='https://tosyngy.000webhostapp.com';
    $(document).on('click','#logout',function(){
        window.localStorage.removeItem('username') ;
        window.localStorage.removeItem('mobile') ;
        window.localStorage.removeItem('firstname') ;
        window.localStorage.removeItem('othername') ;
        window.localStorage.removeItem('other1') ;
        window.localStorage.removeItem('other2') ;
        window.localStorage.removeItem('other3') ;
        $(location).attr('href','index.html')
    })
    var pix=ip+'/mobilehealthserver/uploads/usr_profile/'+window.localStorage.getItem('id')+'.png';
    $('#id').text(window.localStorage.getItem('id'));
    $('.profilepix').attr('src',pix);
    $('.kv-preview-thumb .kv-file-content').append("<img src='"+pix+"' width='100%'>")
    $('.username').text(window.localStorage.getItem('username'));
    $('.name').html(window.localStorage.getItem('firstname')+' '+window.localStorage.getItem('othername'));
    $('.mobile').text(window.localStorage.getItem('mobile'));
    $('.other1').val(window.localStorage.getItem('other1'));
    $('.other2').val(window.localStorage.getItem('other2'));
    $('.other3').val(window.localStorage.getItem('other3'));
    $('.other1').text(window.localStorage.getItem('other1'));
    $('.other2').text(window.localStorage.getItem('other2'));
    $('.other3').text(window.localStorage.getItem('other3'));
    
    
    if(myStorage.getItem('username')!==undefined && myStorage.getItem('username')!==''&& myStorage.getItem('username')!==null){
        $('.logout1').css('display','block');
        $('.image1').css('display','block'); 
        $('.status1').css('display','block'); 
    }else{
        $('.login1').css('display','block'); 
        $('.register1').css('display','block'); 
    }
    var indexdownview="<div id='fh5co-why-us' class='animate-box'>"
    var  indexview="<aside id='fh5co-hero' class='js-fullheight'>";
    indexview+="<div class='flexslider js-fullheight'>";
    indexview+="<ul class='slides'>"
    // alert(window.localStorage.getItem('username'))
    if(window.localStorage.getItem('username')){
        indexview+="<li style='background-image: url(images/slide_1.jpg);'>"
        indexview+="<div class='container'>"
        indexview+="<div class='col-md-10 col-md-offset-1 text-center js-fullheight slider-text' style='margin: auto;'>"
        indexview+="<div class='slider-text-inner'>"
        indexview+="<h2>Meet Experts</h2>"
        indexview+="<p><a href='expert.html' class='btn btn-primary btn-lg'>I love to</a></p>"
        indexview+="</div>"
        indexview+="</div>"
        indexview+="</div>"
        indexview+="</li>"
        indexview+="<li style='background-image: url(images/slide_1.jpg);'>"
        indexview+="<div class='container'>"
        indexview+="<div class='col-md-10 col-md-offset-1 text-center js-fullheight slider-text' style='margin: auto;'>"
        indexview+="<div class='slider-text-inner'>"
        indexview+="<h2>Manage Your Appointments Record</h2>"
        indexview+="<p><a href='appointments.html' class='btn btn-primary btn-lg'>Let me see</a></p>"
        indexview+="</div>"
        indexview+="</div>"
        indexview+="</div>"
        indexview+="</li>"
        indexview+="<li style='background-image: url(images/slide_1.jpg);'>"
        indexview+="<div class='container'>"
        indexview+="<div class='col-md-10 col-md-offset-1 text-center js-fullheight slider-text' style='margin: auto;'>"
        indexview+="<div class='slider-text-inner'>"
        indexview+="<h2>View Health Record</h2>"
        indexview+="<p><a href='healthrecord.html' class='btn btn-primary btn-lg'>Let's Go</a></p>"
        indexview+="</div>"
        indexview+="</div>"
        indexview+="</div>"
        indexview+="</li>"
        indexview+="<li style='background-image: url(images/slide_1.jpg);'>"
        indexview+="<div class='container'>"
        indexview+="<div class='col-md-10 col-md-offset-1 text-center js-fullheight slider-text' style='margin: auto;'>"
        indexview+="<div class='slider-text-inner'>"
        indexview+="<h2>View Medication Record</h2>"
        indexview+="<p><a href='drugrecord.html' class='btn btn-primary btn-lg'>Good to go</a></p>"
        indexview+="</div>"
        indexview+="</div>"
        indexview+="</div>"
        indexview+="</li>"
        
         
        indexdownview+="<h2 style='text-align: center'>Ready For You</h2>"
        indexdownview+="<h5 style='text-align: center'> as</h5>"
        indexdownview+="<div class='container'>"
        indexdownview+="<div class='row'>"
        indexdownview+="<div class='col-xs-12 text-center item-block' style='width: 100%'>"
        indexdownview+="<p><a href='expert.html' class='btn btn-primary btn-outline with-arrow' style='width: 50%'>Medical Expert <i class='icon-arrow-right'></i></a></p>"
        indexdownview+="</div>"

        indexdownview+="<div class='col-xs-12 text-center item-block' style='width: 100%'>"
        indexdownview+="<p><a href='appointments.html' class='btn btn-primary btn-outline with-arrow' style='width: 50%'>Health Appointments <i class='icon-arrow-right'></i></a></p>"
        indexdownview+="</div>"
    
        indexdownview+="<div class='col-xs-12 text-center item-block' style='width: 100%'>"
        indexdownview+="<p><a href='healthrecord.html' class='btn btn-primary btn-outline with-arrow' style='width: 50%'>Health Records <i class='icon-arrow-right'></i></a></p>"
        indexdownview+="</div>"

        indexdownview+="<div class='col-xs-12 text-center item-block' style='width: 100%'>"
        indexdownview+="<p><a href='drugrecord.html' class='btn btn-primary btn-outline with-arrow' style='width: 50%'>Medication Record <i class='icon-arrow-right'></i></a></p>"
        indexdownview+="</div>"
                     
        indexdownview+="<div class='col-xs-12 text-center item-block' style='width: 100%'>"
        indexdownview+="<p><a href='profile.html' class='btn btn-primary btn-outline with-arrow' style='width: 50%'>Profile<i class='icon-arrow-right'></i></a></p>"
        indexdownview+="</div>"

        indexdownview+="<div class='col-xs-12 text-center item-block' style='width: 100%'>"
        indexdownview+="<p><a href='settings.html' class='btn btn-primary btn-outline with-arrow' style='width: 50%'>Profile Setup<i class='icon-arrow-right'></i></a></p>"
        indexdownview+="</div>" 
        indexdownview+="</div>"
        indexdownview+="</div>";
        indexdownview+="</div>";
        
    }else{
        indexview+="<li style='background-image: url(images/slide_1.jpg);'>"
        indexview+="<div class='container'>"
        indexview+="<div class='col-md-10 col-md-offset-1 text-center js-fullheight slider-text' style='margin: auto;'>"
        indexview+="<div class='slider-text-inner'>"
        indexview+="<h2>I want to Use</h2>"
        indexview+="<p><a href='register.html?u=0' class='btn btn-primary btn-lg'>Get started</a></p>"
        indexview+="</div>"
        indexview+="</div>"
        indexview+="</div>"
        indexview+="</li>"
        indexview+="<li style='background-image: url(images/slide_1.jpg);'>"
        indexview+="<div class='overlay-gradient'></div>"
        indexview+="<div class='container'>"
        indexview+="<div class='col-md-10 col-md-offset-1 text-center js-fullheight slider-text' style='margin: auto;'>"
        indexview+="<div class='slider-text-inner'>"
        indexview+="<h2>I am a medical Expert</h2>"
        indexview+="<p><a href='register.html?u=1' class='btn btn-primary btn-lg'>Get started</a></p>"
        indexview+="</div>"
        indexview+="</div>"
        indexview+="</div>"
        indexview+="</li>"
        indexview+="<li style='background-image: url(images/slide_1.jpg);'>"
        indexview+="<div class='container'>"
        indexview+="<div class='col-md-10 col-md-offset-1 text-center js-fullheight slider-text' style='margin: auto;'>"
        indexview+="<div class='slider-text-inner'>"
        indexview+="<h2>I am a pharmacist</h2>"
        indexview+="<p><a href='register.html?u=1' class='btn btn-primary btn-lg'>Get started</a></p>"
        indexview+="</div>"
        indexview+="</div>"
        indexview+="</div>"
        indexview+="</li>" 
        
        
       
        indexdownview+="<h2 style='text-align: center'>Login or Register</h2>"
        indexdownview+="<h5 style='text-align: center'> as</h5>"
        indexdownview+="<div class='container'>"
        indexdownview+="<div class='row'>"
        indexdownview+="<div class='col-xs-12 text-center item-block' style='width: 100%'>"
        indexdownview+="<p><a href='login.html' class='btn btn-primary btn-outline with-arrow' style='width: 50%'>User <i class='icon-arrow-right'></i></a></p>"
        indexdownview+="</div>"

        indexdownview+="<div class='col-xs-12 text-center item-block' style='width: 100%'>"
        indexdownview+="<p><a href='register.html?u=1' class='btn btn-primary btn-outline with-arrow' style='width: 50%'>Medical Expert <i class='icon-arrow-right'></i></a></p>"
        indexdownview+="</div>"
                     
        indexdownview+="</div>"
        indexdownview+="</div>";
        indexdownview+="</div>";
    }
    indexview+="</ul>"
    indexview+="</div>"
    indexview+="</aside>" 
    $('#fh5co-hero').replaceWith(indexview);
    $('#fh5co-why-us').replaceWith(indexdownview); 
    $.post(ip+"/mobilehealthserver/notify.php",
    {
        id:window.localStorage.getItem('id')
    },
    function(data){
       
        $("#notify").text(data);
        
    })
    $(document).on('click','.notify',function(){
        $(location).attr('href','appointments.html');
    })
   
    
})






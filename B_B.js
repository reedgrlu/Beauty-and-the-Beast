
night_theme = function (){
   jQuery("#theme").attr("href","night_theme.css")
}
default_theme = function (){
	jQuery("#theme").attr("href","B_B_style.css")
}

add_user_text = function(){
    open_p = '<p id="post_body">'
    close_p = '</p>'
	added_p = jQuery("#discussion_post").val()
	jQuery("div#post").append(open_p + added_p + close_p)
}


hide_p1 = function() {
        jQuery("#page1").hide()
}

show_p1 = function (){
		jQuery("#page1").show()
}

hide_p2 = function() {
        jQuery("#page2").hide()
}

show_p2 = function (){
		jQuery("#page2").show()
}


hide_p3 = function() {
        jQuery("#page3").hide()
}

show_p3 = function (){
		jQuery("#page3").show()
}

setup = function() {
       
        jQuery("#default_btn").click(default_theme)
		jQuery("#night_btn").click(night_theme)
		jQuery("#add_user_p").click(add_user_text)
		jQuery("#page2").hide()
		jQuery("#page3").hide()
        jQuery("#page_2_btn").click(hide_p1)
		jQuery("#page_2_btn").click(show_p2)
		jQuery("#page_2_btn2").click(show_p2)
		jQuery("#page_2_btn2").click(hide_p3)
		jQuery("#page_1_btn").click(hide_p2)
		jQuery("#page_1_btn").click(show_p1)
		jQuery("#page_3_btn").click(show_p3)
		jQuery("#page_3_btn").click(hide_p2)
}
 
$(document).ready(setup)
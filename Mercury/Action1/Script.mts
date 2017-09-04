systemutil.Run "http://newtours.demoaut.com"
Browser("Welcome: Mercury Tours").Page("Welcome: Mercury Tours").WebEdit("userName").Set "mercury" @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Welcome: Mercury Tours").WebEdit("userName")_;_script infofile_;_ZIP::ssf1.xml_;_
Browser("Welcome: Mercury Tours").Page("Welcome: Mercury Tours").WebEdit("password").SetSecure "59ad2a04561aa2d8292da29b5a9db5a3539722e5" @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Welcome: Mercury Tours").WebEdit("password")_;_script infofile_;_ZIP::ssf2.xml_;_
Browser("Welcome: Mercury Tours").Page("Welcome: Mercury Tours").Image("Sign-In").Click 23,8 @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Welcome: Mercury Tours").Image("Sign-In")_;_script infofile_;_ZIP::ssf3.xml_;_
Browser("Welcome: Mercury Tours").Page("Welcome: Mercury Tours").Sync @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Welcome: Mercury Tours")_;_script infofile_;_ZIP::ssf4.xml_;_
Browser("Welcome: Mercury Tours").Page("Find a Flight: Mercury").Link("SIGN-OFF").Check CheckPoint("SIGN-OFF") @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Find a Flight: Mercury").Link("SIGN-OFF")_;_script infofile_;_ZIP::ssf7.xml_;_
wait(5)
Browser("Welcome: Mercury Tours").Page("Find a Flight: Mercury").Link("SIGN-OFF").Click @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Find a Flight: Mercury").Link("SIGN-OFF")_;_script infofile_;_ZIP::ssf8.xml_;_
Browser("Welcome: Mercury Tours").Page("Find a Flight: Mercury").Sync @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Find a Flight: Mercury")_;_script infofile_;_ZIP::ssf9.xml_;_
Browser("Welcome: Mercury Tours").CloseAllTabs

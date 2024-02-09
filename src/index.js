// var title=document.createElement
// title.innertext=""
// document.title="State Common Entrance Test Cell | Government of Maharashtra"

//Document Title 
document.title="State Common Entrance Test Cell | Government of Maharashtra"

const root=document.getElementById("root")

//Linking to  Css file 

// const indexCssLink=document.createElement("link")
// indexCssLink.rel="stylesheet"
// indexCssLink.href="style/index.css"
// document.head.appendChild(indexCssLink)
//  document.body.style.background="red"

// // Linking to Font Awesome 
// const fontAwesomeLink=document.createElement("link")
// fontAwesomeLink.ref="stylesheet"
// fontAwesomeLink.href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
// document.head.appendChild(fontAwesomeLink)

// // Linking to the Boostrap 

// const boostrap=document.createElement("link")
// boostrap.rel="stylesheet"
// boostrap.href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
// boostrap.integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" 
// boostrap.crossorigin="anonymous"
// document.head.appendChild(boostrap)
function addlink(path)
{
    const linkname=document.createElement("link")
    linkname.rel="stylesheet"
    linkname.href=path
    document.head.appendChild(linkname)
    return "success"
}

  addlink("https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css")
  addlink("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css")
  addlink("style/index.css")
  console.log("")

  const header=document.createElement("header")
  root.appendChild(header)
   
  //header div 
  const headerWrapper=document.createElement("div")
  header.appendChild(headerWrapper)


const headerContainer=document.createElement("div")
headerContainer.className="container "
// console.log(headercontainer)
headerContainer.style.width = "80%"
headerContainer.className = "mx-auto"
///css part
headerWrapper.style.borderBottom = "1px solid #000"
headerWrapper.appendChild(headerContainer)
header.appendChild(headerWrapper)




const navbar=document.createElement("navbar")
navbar.style.padding="10px 0px"
headerContainer.appendChild(navbar)

 const headerUl=document.createElement("ul")
 headerUl.className="d-flex justify-content-between p-0 m-0 "
 headerUl.style.listStyle="none"
 headerUl.style.alignItems="center"
 headerUl.style.fontSize="18px"
 navbar.appendChild(headerUl)

// const headerli=document.createElement("li")
// ul.appendChild(headerli)
// console.log(headerli)

const array=[
    {
        title: "Skip to main content",
        icon: "fa-arrow-down ",
        flex: 1.6
        
    },
    {
        icon: "fa-volume-up",
        flex: 0.8
        
    },
    {
        title: "A",
        flex: 0.8
    },
    {
        icon: "fa-sitemap",
        flex: 0.8
    },
    {
        icon: "fa-search",
        flex: 0.8
    },
    {
        icon: "fa-youtube-play",
        flex:0.3
    },
    {
        icon: 
        "fa-facebook-official",
        flex: 0.3
    },
    {
        icon: "fa-instagram",
        flex:0.3
    },
    {
        title: "twitter",
        icon: "fa-twitter",
        flex:1
    }
]


 
    for(let i=0;i<array.length;i++){
        // console.log(array[i])
        const headerli=document.createElement("li")
        headerli.style.flex = array[i].flex
        const aTag=document.createElement("a")
        aTag.className="text-dark text-decoration-nonessss"
        aTag.href="#"
        console.log(aTag)
        const itag = document.createElement("i")
        itag.className = `fa ${array[i].icon}`
        aTag.append(itag)    
        aTag.append(array[i].title || "")
        headerli.appendChild(aTag)
        headerUl.appendChild(headerli)
    }

    ///header Middle 

    const headerMiddle=document.createElement("header")
    headerMiddle.className="container"
    const headerMiddleWrapper=document.createElement("div")
    headerMiddleWrapper.style.width="60%"
    headerMiddleWrapper.className="d-flex mt-2 "

    //middle header height
    //  headerMiddleWrapper.style.background="green" 
    headerMiddleWrapper.style.height = "100px"
    

    //Img Satymev Jaytey
    const satyaMevLogo=document.createElement("div")
    satyaMevLogo.style.height="100px"
    satyaMevLogo.style.width="100px"

    const satyMevJeyteImg=document.createElement("img")
    satyMevJeyteImg.src="images/satyamev-jayte-removebg.png"
    satyMevJeyteImg.alt="satyamev-jayte-removebg.png"
    // satyMevJeyteImg.style.background="blue"
    satyMevJeyteImg.width="100"
    satyMevJeyteImg.height="100"
    satyMevJeyteImg.style.objectFit="contain"

    //Cet Logo Img
    const governmentDiv=document.createElement("div")
    governmentDiv.style.width="80%"
    governmentDiv.className="border-start border-dark d-flex gap-3 ps-2 align-items-center"
   
    //Testing 

    // governmentDiv.style.background="red"

    //CET Logo Img
     const cetImg=document.createElement("img")
     cetImg.src="images/cet_cell-removebg-preview.png"
     cetImg.alt="cet_cell-removebg-preview"
     cetImg.width="100"
     cetImg.height="100"
    //  cetImg.style.background="yellow"
     cetImg.style.objectFit="contain"

     //Goverment Div Content h1
     const governmentDivContent= document.createElement("div")
     const governmentDivContentH1 = document.createElement("h1")
     governmentDivContentH1.innerText = "GOVERNMENT OF MAHARASHTRA"
     governmentDivContentH1.className = "fw-bold"
     governmentDivContentH1.style.fontSize = "20px"
     
     //Goverment Div content h2
     const governmentDivContentH5 = document.createElement("h5")
     governmentDivContentH5.innerText = "State Common Entrance Test Cell"
     governmentDivContentH5.className = "fw-bold text-center"
     governmentDivContentH5.style.fontSize = "15px"
     

     //Goverment Logo Prajwal
     const governmentLogo = document.createElement("div")
     governmentLogo.style.width = "100px"
     governmentLogo.style.height = "100px"
     
     
     //create  to government img logo seal
     const governmentLogoImg = document.createElement("img")
     governmentLogoImg.src = "images/Seal_of_Maharashtra.png"
     governmentLogoImg.alt = "#"
     governmentLogoImg.width = "100"
     governmentLogoImg.height = "100"
     governmentLogoImg.style.objectFit = "contain"
     

      
      governmentLogo.appendChild(governmentLogoImg)
     governmentDiv.appendChild(cetImg)
     governmentDiv.appendChild(governmentDivContent)
     governmentDivContent.appendChild(governmentDivContentH1)
     governmentDivContent.appendChild(governmentDivContentH5)
    satyaMevLogo.appendChild(satyMevJeyteImg)
    headerMiddleWrapper.appendChild(satyaMevLogo)
    headerMiddleWrapper.appendChild(governmentDiv)
    headerMiddleWrapper.appendChild(governmentLogo)
    headerMiddle.appendChild(headerMiddleWrapper)
    header.appendChild(headerMiddle)

  //------------------------------------------Bottom Header-----------------------------------------------------------  

//Header bottam
const headerBottam=document.createElement("div")
headerBottam.style.width="100%"
headerBottam.style.background="#163269"
headerBottam.className="mt-1 py-2"

//Header Navbar
const headerBottamNav=document.createElement("nav")
headerBottamNav.style.height="100px"
// headerBottamNav.style.width="80%"
headerBottamNav.className="w-75 mx-auto d-flex justify-content-between align-items-center "


//Header Navbar Ul
const headerBottamNavUl=document.createElement("ul")
headerBottamNavUl.style.listStyle="none"
headerBottamNavUl.className="d-flex gap-4 m-0"
headerBottamNavUl.style.paddingInlineStart="80px"

//Header Navbar list
const headerBottomNavUlLiList = ["Home", "About Us", "CETs", "CAP", "Downloads", "Statics", "Online System", "Event", "Contact"]

headerBottomNavUlLiList.forEach(function(element,i){
    const headerBottomNavUlli=document.createElement("li")
    const headerBottomNavUlLiAtag =document.createElement("a")
    headerBottomNavUlLiAtag.href="#"
    headerBottomNavUlLiAtag.innerText=element
    headerBottomNavUlLiAtag.className="text-decoration-none text-white"
    headerBottomNavUlli.appendChild(headerBottomNavUlLiAtag)
    headerBottamNavUl.appendChild(headerBottomNavUlli)
})

//HeaderBottom img tag
const headerBottomNavBtn = document.createElement("button")
headerBottomNavBtn.type = "button"
headerBottomNavBtn.innerText = "Ask Pragati"
headerBottomNavBtn.style.fontSize="20px"
headerBottomNavBtn.className = "text-white p-1 px-2 rounded-2"
headerBottomNavBtn.style.border = "1px solid #808080"
headerBottomNavBtn.style.background = "#01205D"

//create a img to btn
const headerBottomNavBtnImg = document.createElement("img")
headerBottomNavBtnImg.src = "images/Ask_pragati.png"
headerBottomNavBtnImg.alt = ""
headerBottomNavBtnImg.width = "40"

headerBottomNavBtn.appendChild(headerBottomNavBtnImg)
headerBottam.appendChild(headerBottamNav)
headerBottamNav.appendChild(headerBottamNavUl)
headerBottamNav.appendChild(headerBottomNavBtn)
header.appendChild(headerBottam)

//------------------------------------------------------Main Part---------------------------------------------------------

const main = document.createElement("main")

//notice
const mainNotice = document.createElement("section")
mainNotice.className = "container my-2 d-flex gap-2"
const mainNoticeAnnoucementBtn = document.createElement("button")
mainNoticeAnnoucementBtn.innerText = "Announcement"
mainNoticeAnnoucementBtn.style.background = "#EEC641"
mainNoticeAnnoucementBtn.className = "btn text-white fw-bold"

//create marquee tag
const mainNoticeMarquee = document.createElement("marquee")
mainNoticeMarquee.innerHTML = "Imp Notice: Dates have been Extended for various courses of CET registration for A.Y 2023-24 (English/Marathi)"
mainNoticeMarquee.style.background = "#F1F1F1"
mainNoticeMarquee.behavior = ""
mainNoticeMarquee.direction = ""
mainNoticeMarquee.style.lineHeight = "2.3"
mainNoticeMarquee.className = "m-0 p-0"

//create new keyword to pop inifinte
const newInfinite = document.createElement("img")
newInfinite.src="images/blinknew_images.gif"
newInfinite.alt="blinknew_images"
newInfinite.className = " mx-1"
// newInfinite.style.paddingTop="-30px"
mainNoticeMarquee.appendChild(newInfinite)

// mainNoticeMarquee.innerText += "New"
main.appendChild(mainNotice)
mainNotice.appendChild(mainNoticeAnnoucementBtn)
mainNotice.appendChild(mainNoticeMarquee)
root.appendChild(main)

//---------------------------------------------------------Banner Main---------------------------------------------------

//Banner 100% width
const banner=document.createElement("div")
banner.style.width="100%"
banner.style.height="400px"
banner.style.display="flex"

//Banner left side 75 width
const bannerLeft=document.createElement("div")
bannerLeft.style.width = "75%"
bannerLeft.style.height = "100%"
bannerLeft.style.background="url(images/Goverment_Exam_Portal.png)"
bannerLeft.style.backgroundRepeat = "no-repeat"
bannerLeft.style.backgroundSize = "cover"
bannerLeft.style.position= "relative"

// bannerLeft.style.display="flex justify-content-between"


//Number Card LeftSide Column
const bannerLeftCourseNumbers = document.createElement("div")
bannerLeftCourseNumbers.className = "row m-0 position-absolute"
bannerLeftCourseNumbers.style.bottom = "-68px"
bannerLeftCourseNumbers.style.background="#EEC641"
bannerLeftCourseNumbers.style.width = "100%"


function cardNumber(title,descriptionText,background,columns)
{
    const card=document.createElement("div")
    card.className="col-12 col-lg-4 text-center text-white  py-2 "

     card.className = `col-12 col-lg-${columns || 4} text-center text-white  py-2 `

    if(background)
    {
        card.style.background = background
    }
    const titleH5=document.createElement("h5")
    titleH5.className="count"
    titleH5.setAttribute("data-count",title)
    titleH5.innerText=0
    titleH5.style.fontSize = "30px"
    titleH5.innerText=title

    
    const description=document.createElement("p")
    description.className = "m-0"
    description.innerHTML=descriptionText

    //append child to card
    // card.style.width="33.3%"
    // card.style.textAlign="center"
    card.appendChild(titleH5)
    card.appendChild(description)
    return card
}
 bannerLeftCourseNumbers.appendChild(cardNumber(6, "Number of Departments"))
 bannerLeftCourseNumbers.appendChild(cardNumber(19, "Number of CETs", "#163269"))
 bannerLeftCourseNumbers.appendChild(cardNumber(61, "Number of Courses"))

 //Banner right side 25 width
const bannerRight=document.createElement("div")
bannerRight.style.width="25%"
bannerRight.style.height = "100%"
bannerRight.style.position="relative"
bannerRight.style.background = "linear-gradient(180deg, rgba(22,50,105,0.8) 10%, rgba(238,198,65,1) 100%)"


 //Banner Right side IconTitleCard Title

 function IconTitleCard(icon, titleString, background)
 {
    let card = document.createElement("div")
    card.className = "d-flex align-items-center gap-3 p-2 text-white mt-2"
    let leftBox = document.createElement("div")
    leftBox.style.width = "70px"
    leftBox.style.height = "70px"
    leftBox.className = "bg-white rounded-pill d-flex  align-items-center justify-content-center"

    //inside the pill box icon 
    const subdivLeft = document.createElement("div")
    subdivLeft.style.width = "50px"
    subdivLeft.style.height = "50px"
    subdivLeft.style.background = background
    subdivLeft.className = " rounded-pill d-flex  align-items-center justify-content-center"
    subdivLeft.innerHTML = `<i class="fa ${icon}" style="font-size:30px;" aria-hidden="true"></i>`
    leftBox.appendChild(subdivLeft)

    let rightBox = document.createElement("div")
    rightBox.style.flex = 1
    
    //create right box inside box 
    const title = document.createElement("h6")
    title.style.lineHeight = "22px"
    title.innerText = titleString
    rightBox.appendChild(title)
    card.appendChild(leftBox)
    card.appendChild(rightBox)
    return card
 }
 bannerRight.appendChild(IconTitleCard("fa-user-circle-o", "Candidate Registration A.Y 2024-25", "#0E8F52"))
 bannerRight.appendChild(IconTitleCard("fa-users", "Candidate Help Module", "#FFB859"))
 bannerRight.appendChild(IconTitleCard("fa-graduation-cap", "Foreign Candidate Registration Portal", "#163269"))
 bannerRight.appendChild(IconTitleCard("fa-id-card", "Admissions Regulating Authority (ARA) Website", "#EE6A41"))

 //right side box course banner Number
const bannerRightCourseNumbers = document.createElement("div")
bannerRightCourseNumbers.className = "row mt-2 position-absolute w-100 "
bannerRightCourseNumbers.style.bottom = "-68px"
bannerRightCourseNumbers.style.left = "12px"
bannerRightCourseNumbers.appendChild(cardNumber(4100, "Number of Departments", "#163269",12))

bannerLeft.appendChild(bannerLeftCourseNumbers)
banner.appendChild(bannerLeft)
banner.appendChild(bannerRight)
bannerRight.appendChild(bannerRightCourseNumbers)
main.appendChild(banner)

// counter part------------------------------------------------------------------

const counts = document.querySelectorAll(".count")


//-----------------------------------------About Cet cell--------------------------------------------
 const aboutCetSection=document.createElement("div")
//  aboutCetSection.style.height="1500px"
 aboutCetSection.style.background="url(images/AboutBg.jpg)"
 aboutCetSection.style.backgroundSize ="cover"
 aboutCetSection.style.backgroundPosition="center 0px "
 aboutCetSection.style.backgroundRepeat="no-repeat"
 aboutCetSection.style.backgroundAttachment ="fixed"

 //-----------------------------------About Cet Cell Overlay color---------------------
  
 
 const aboutCetOverlay=document.createElement("div")
 aboutCetOverlay.style.background="#ffffffbd"
 aboutCetOverlay.style.padding = "70px 0px"
//------------------------------------------about SectionContainer----------
 const aboutSectionContainer=document.createElement("div")
 aboutSectionContainer.className="container "
 aboutSectionContainer.style.marginTop = "84px"
// ---------------------------------about about cet section row---------
const aboutSectionContainerRow=document.createElement("div")
aboutSectionContainerRow.className="row"
//------------------------------------left column---------------------------------
const aboutSectionContainerRowLeft = document.createElement("div")
aboutSectionContainerRowLeft.className = "col-12 col-lg-5 "
//images left side
const imgDiv = document.createElement("div")
imgDiv.style.borderLeft = "15px solid #163269"
imgDiv.style.borderBottom = "15px solid #163269"
const aboutSectionContainerRowLeftImg = document.createElement("img")
aboutSectionContainerRowLeftImg.src = "images/CetAboutScholarship.png"
aboutSectionContainerRowLeftImg.alt = "abountLeft"
aboutSectionContainerRowLeftImg.style.width = "100%"
aboutSectionContainerRowLeftImg.style.height = "250px"
aboutSectionContainerRowLeftImg.style.objectFit = "contain"
aboutSectionContainerRowLeftImg.style.objectPosition = "10px 10px"

imgDiv.appendChild(aboutSectionContainerRowLeftImg)
aboutSectionContainerRowLeft.appendChild(imgDiv)

//-----------------------------------Right Side Column-----------------------
const aboutSectionContainerRowRight=document.createElement("div")
aboutSectionContainerRowRight.className="col-12 col-lg-7"

const aboutSectionContainerRowRightHeading=document.createElement("h2")
aboutSectionContainerRowRightHeading.innerText="About CET Cell"
aboutSectionContainerRowRightHeading.style.color="#163269"

const aboutSectionContainerRowRightPara1=document.createElement("p")
aboutSectionContainerRowRightPara1.innerText="The Government of Maharashtra has established State Common Entrance Test Cell as per Section 10 of the Maharashtra Unaided Private Professional Educational Institutions (Regulation of Admissions and Fees) Act ,2015. The CET Cell conducts various entrance exams for Admission to Professional courses in the state of Maharashtra, India."
aboutSectionContainerRowRightPara1.style.textAlign="justify"
aboutSectionContainerRowRightPara1.style.fontSize="17px"
const aboutSectionContainerRowRightPara2=document.createElement("p")
aboutSectionContainerRowRightPara2.innerText="Its primary purpose is to facilitate the admission process for Professional courses such as Engineering, Management, Pharmacy, Agriculture, law, Medical, AYUSH & Fine Arts ."
aboutSectionContainerRowRightPara2.style.textAlign="justify"
aboutSectionContainerRowRightPara2.style.fontSize="17px"


aboutSectionContainerRowRight.appendChild(aboutSectionContainerRowRightHeading)
aboutSectionContainerRowRight.appendChild(aboutSectionContainerRowRightPara1)
aboutSectionContainerRowRight.appendChild(aboutSectionContainerRowRightPara2)


aboutSectionContainerRow.appendChild(aboutSectionContainerRowLeft) 
aboutSectionContainerRow.appendChild(aboutSectionContainerRowRight)
aboutSectionContainer.appendChild(aboutSectionContainerRow)
aboutCetOverlay.appendChild(aboutSectionContainer)
aboutCetSection.appendChild(aboutCetOverlay)
 main.appendChild(aboutCetSection)

//----------------------------------------------------------Table Section ----------------------------------

const tableSection = document.createElement("div")
tableSection.style.background = "#EAEAEA"

const menuContainer = document.createElement("div")
menuContainer.className = "w-75 mx-auto py-3"
menuContainer.innerHTML = `<nav class="nav justify-content-between " style="font-size:16px">
<button type="button" class="  px-4 py-2 bg-white border-0  g_about_btn" aria-current="page" >All</button>
<button type="button" class=" px-4 py-2 bg-white border-0 g_about_btn" >Technical Education</button>
<button type="button" class=" px-4 py-2 bg-white border-0 g_about_btn" >Higher Education</button>
<button type="button" class=" px-4 py-2 bg-white border-0 g_about_btn" >Agriculture Education</button>
<button type="button" class=" px-4 py-2 bg-white border-0 g_about_btn" >Fine Art Education</button>
<button type="button" class=" px-4 py-2 bg-white border-0 g_about_btn" >Medical Education</button>
<button type="button" class=" px-4 py-2 bg-white border-0 g_about_btn" >AYUSH</button>
</nav>`

         window.onload=function(){
            const aboutBtn = document.querySelector(".g_about_btn")
            aboutBtn.classList.remove("bg-white")
            aboutBtn.classList.add("bg-warning")
         
         
// document.addEventListener("click",function(event){
//     const onbtn=event.target.classList.contains("g_about_btn")
//     if(onbtn)
//     {
//          const existingBtn=document.querySelectorAll(".g_about_btn")
//         existingBtn.forEach((ele) =>{
//             ele.classList.add("bg-white")         
//         })
//         event.target.classList.remove("bg-white")
//         event.target.classList.add("bg-warning")
//     }
// })

// document.addEventListener("click",function(event){
//          const existingBtn=document.querySelectorAll(".g_about_btn")
//         existingBtn.forEach((ele) =>{
//             ele.classList.add("bg-white")         
//         })
//         event.target.classList.remove("bg-white")
//         event.target.classList.add("bg-warning")
// })

dynamicData([
    {
        id: 1,
        course: "LLB 3 Yrs",
        subject: "Important Notice for Preparatory Passed Candidates.",
        isNew: true,
        date: "02/02/2024",
        download: "https://cetcell.mahacet.org/wp-content/uploads/2023/12/Important-Notices_Preperatory-CET-2024.pdf"
    },
    {
        id: 2,
        course: "All CET's",
        subject: "User Manual Video for CET Registration A.Y. 2024-25",
        isNew: true,
        date: "31/01/2024",
        download: "https://www.youtube.com/watch?v=UuJSWbIoyGQ"
    },
    {
        id: 3,
        course: "MAH- AAC (Fine Art)",
        subject: "MAH- AAC (Fine Art) CET 2024 Online Application Notice No.1 (English/Marathi)",
        isNew: true,
        date: "30/01/2024",
        download: "https://cetcell.mahacet.org/wp-content/uploads/2023/12/Online-Application-Notice.pdf"
    },
    {
        id: 4,
        course: "All CET's",
        subject: "Imp Notice: Dates have been Extended for various courses of CET registration for A.Y 2024-25 (English/Marathi)",
        isNew: true,
        date: "29/01/2024",
        download: "https://cetcell.mahacet.org/wp-content/uploads/2023/12/Extenstion-Notice.pdf"
    },
    {
        id: 5,
        course: "Higher Courses",
        subject: "IMP : CLARITY ABOUT BED (2Yr. RegularCourse) , BED-MED (3Yr.Int.Course) and Ba/BScBEd (4Yr. Int.Course ).",
        isNew: true,
        date: "12/01/2024",
        download: "https://cetcell.mahacet.org/wp-content/uploads/2023/12/Public-Notice.pdf"
    },
    {
        id: 6,
        course: "All CET's",
        subject: "As per the new rules for A.Y. 2024-25, the fee structure for CET Registrations for Transgender and Orphan candidates will be the same as that for the Reserved category.",
        isNew: true,
        date: "11/01/2024",
        download: " "
    },
    {
        id: 7,
        course: "All CET's",
        subject: "Activity Schedule for all CET Registration for A.Y. 2024-25",
        isNew: true,
        date: "11/01/2024",
        download: "https://cetcell.mahacet.org/wp-content/uploads/2023/12/English-Notice-CET-2024.pdf"
    },
    {
        id: 8,
        course: "MHT CET, MBA/MMS, MCA, M.Arch, M.HMCT, B.HMCT, B.Design",
        subject: "Click Here To View Syllabus of All Courses Under Technical Education A.Y. 2024-25",
        isNew: true,
        date: "01/01/2024",
        download: "https://cetcell.mahacet.org/wp-content/uploads/2023/08/Technical_Education_CET_syllabus2024-25.pdf"
    },
    {
        id: 9,
        course: "All CET's",
        subject: "Updated Tentative Schedule for All Common Entrance Tests A.Y. 2024-25",
        isNew: true,
        date: "13/12/2024",
        download: "https://cetcell.mahacet.org/wp-content/uploads/2023/08/CETCELL_Tentative_CET_Schedule2024-25.pdf"
    }

])
}
function dynamicData(tableData = []) {
tableData.forEach(function(element){
    const tableBodyTr=document.createElement("tr")
    const tableBodyTd1=document.createElement("td")
    tableBodyTd1.innerText=element.id

    const tableBodyTd2=document.createElement("td")
    tableBodyTd2.innerText=element.course

    const tableBodyTd3=document.createElement("td")
    tableBodyTd3.innerText=element.subject

    //imgnew tag
        // let newimg=document.createElement("img")
        // newimg=function()
        // {
        //     newimg.src="images/blinknew_images.gif"
        //     newimg.alt="blinknew"        
        //    for(let i=0;i<tableData;i++){

        //     if(i==3)
        //     {
        //         break;
        //     }
        //    }
        //    tableBodyTd3.appendChild(newimg)       
        // }

   const newimg=document.createElement("img")
   newimg.src="images/blinknew_images.gif"
    newimg.alt="blinknew"
       tableBodyTd3.appendChild(newimg)
    
     

    const tableBodyTd4= document.createElement("td")
    tableBodyTd4.innerText=element.date

    const tableBodyTd5= document.createElement("td")
    tableBodyTd5.style.textAlign="center"
    tableBodyTd5.style.cursor="pointer"
    const openLink=`<a href="${element.download}" target="_blank" ><i class="fa fa-file-pdf-o fw-bold" aria-hidden="true"></i></a>`
    tableBodyTd5.innerHTML=openLink

    tableBodyTr.appendChild(tableBodyTd1)
    tableBodyTr.appendChild(tableBodyTd2)
    tableBodyTr.appendChild(tableBodyTd3)
    tableBodyTr.appendChild(tableBodyTd4)
    tableBodyTr.appendChild(tableBodyTd5)

   tablebody.appendChild(tableBodyTr)
})
}

document.addEventListener("click", function (event) {
    const onbtn = event.target.classList.contains("g_about_btn")
    if (onbtn) {
        const title = event.target.innerText
        const existingBtn = document.querySelectorAll(".g_about_btn")
        existingBtn.forEach((ele) => {
            ele.classList.add("bg-white")
            const isExist = ele.classList.contains("bg-warning")
            if (isExist) {
                event.target.classList.add("bg-white")
                ele.classList.remove("bg-warning")
            }
        })
        event.target.classList.remove("bg-white")
        event.target.classList.add("bg-warning")
        tablebody.innerHTML=" "

        switch (title) {
            case "Technical Education":
                return dynamicData([
                    {
                        id: 1,
                        course: "All CET's",
                        subject: "User Manual Video for CET Registration A.Y. 2024-25",
                        isNew: true,
                        date: "31/01/2024",
                        download: "https://www.youtube.com/watch?v=UuJSWbIoyGQ"
                    },
                    {
                        id: 2,
                        course: "All CET's",
                        subject: "Imp Notice: Dates have been Extended for various courses of CET registration for A.Y 2024-25 (English/Marathi)",
                        isNew: true,
                        date: "29/01/2024",
                        download: "https://cetcell.mahacet.org/wp-content/uploads/2023/12/Extenstion-Notice.pdf"
                    },
                    {
                        id: 3,
                        course: "All CET's",
                        subject: "As per the new rules for A.Y. 2024-25, the fee structure for CET Registrations for Transgender and Orphan candidates will be the same as that for the Reserved category.",
                        isNew: true,
                        date: "11/01/2024",
                        download: ""
                    },
                    {
                        id: 4,
                        course: "All CET's",
                        subject: "Activity Schedule for all CET Registration for A.Y. 2024-25",
                        isNew: true,
                        date: "11/01/2024",
                        download: "https://cetcell.mahacet.org/wp-content/uploads/2023/12/English-Notice-CET-2024.pdf"
                    },
                    {
                        id: 5,
                        course: "MHT CET, MBA/MMS, MCA, M.Arch, M.HMCT, B.HMCT, B.Design",
                        subject: "Click Here To View Syllabus of All Courses Under Technical Education A.Y. 2024-25",
                        isNew: true,
                        date: "01/01/2024",
                        download: "https://cetcell.mahacet.org/wp-content/uploads/2023/08/Technical_Education_CET_syllabus2024-25.pdf"
                    },
                    {
                        id: 6,
                        course: "All CET's",
                        subject: "Updated Tentative Schedule for All Common Entrance Tests A.Y. 2024-25",
                        isNew: true,
                        date: "13/12/2024",
                        download: "https://cetcell.mahacet.org/wp-content/uploads/2023/08/CETCELL_Tentative_CET_Schedule2024-25.pdf"
                    }
                ])
            case "Higher Education":
                return dynamicData([
                    {
                        id: 1,
                        course: "LLB 3 Yrs",
                        subject: "Important Notice for Preparatory Passed Candidates.",
                        isNew: true,
                        date: "02/02/2024",
                        download: "https://cetcell.mahacet.org/wp-content/uploads/2023/12/Important-Notices_Preperatory-CET-2024.pdf"
                    },
                    {
                        id: 2,
                        course: "All CET's",
                        subject: "User Manual Video for CET Registration A.Y. 2024-25",
                        isNew: true,
                        date: "31/01/2024",
                        download: "https://www.youtube.com/watch?v=UuJSWbIoyGQ"
                    },
                    {
                        id: 3,
                        course: "All CET's",
                        subject: "Imp Notice: Dates have been Extended for various courses of CET registration for A.Y 2024-25 (English/Marathi)",
                        isNew: true,
                        date: "29/01/2024",
                        download: "https://cetcell.mahacet.org/wp-content/uploads/2023/12/Extenstion-Notice.pdf"
                    },
                    {
                        id: 4,
                        course: "Higher Courses",
                        subject: "IMP : CLARITY ABOUT BED (2Yr. RegularCourse) , BED-MED (3Yr.Int.Course) and Ba/BScBEd (4Yr. Int.Course ).",
                        isNew: true,
                        date: "12/01/2024",
                        download: "https://cetcell.mahacet.org/wp-content/uploads/2023/12/Public-Notice.pdf"
                    },
                    {
                        id: 5,
                        course: "All CET's",
                        subject: "As per the new rules for A.Y. 2024-25, the fee structure for CET Registrations for Transgender and Orphan candidates will be the same as that for the Reserved category.",
                        isNew: true,
                        date: "11/01/2024",
                        download: ""
                    },
                    {
                        id: 6,
                        course: "All CET's",
                        subject: "Activity Schedule for all CET Registration for A.Y. 2024-25",
                        isNew: true,
                        date: "11/01/2024",
                        download: "https://cetcell.mahacet.org/wp-content/uploads/2023/12/English-Notice-CET-2024.pdf"
                    },
                    
                    {
                        id: 7,
                        course: "All CET's",
                        subject: "Updated Tentative Schedule for All Common Entrance Tests A.Y. 2024-25",
                        isNew: true,
                        date: "13/12/2024",
                        download: "https://cetcell.mahacet.org/wp-content/uploads/2023/08/CETCELL_Tentative_CET_Schedule2024-25.pdf"
                    }

                ])
            case "Agriculture Education":
                return dynamicData([
                    {
                        id: 1,
                        course: "All CET's",
                        subject: "User Manual Video for CET Registration A.Y. 2024-25",
                        isNew: true,
                        date: "31/01/2024",
                        download: "https://www.youtube.com/watch?v=UuJSWbIoyGQ"
                    },
                    {
                        id: 2,
                        course: "All CET's",
                        subject: "Imp Notice: Dates have been Extended for various courses of CET registration for A.Y 2024-25 (English/Marathi)",
                        isNew: true,
                        date: "29/01/2024",
                        download: "https://cetcell.mahacet.org/wp-content/uploads/2023/12/Extenstion-Notice.pdf"
                    },
                    {
                        id: 3,
                        course: "All CET's",
                        subject: "As per the new rules for A.Y. 2024-25, the fee structure for CET Registrations for Transgender and Orphan candidates will be the same as that for the Reserved category.",
                        isNew: true,
                        date: "11/01/2024",
                        download: ""
                    },
                    {
                        id: 4,
                        course: "All CET's",
                        subject: "Activity Schedule for all CET Registration for A.Y. 2024-25",
                        isNew: true,
                        date: "11/01/2024",
                        download: "https://cetcell.mahacet.org/wp-content/uploads/2023/12/English-Notice-CET-2024.pdf"
                    },
                    {
                        id: 5,
                        course: "All CET's",
                        subject: "Updated Tentative Schedule for All Common Entrance Tests A.Y. 2024-25",
                        isNew: true,
                        date: "13/12/2024",
                        download: "https://cetcell.mahacet.org/wp-content/uploads/2023/08/CETCELL_Tentative_CET_Schedule2024-25.pdf"
                    }
                ])
            case "Fine Art Education":
                return dynamicData([
                    {
                        id: 1,
                        course: "All CET's",
                        subject: "User Manual Video for CET Registration A.Y. 2024-25",
                        isNew: true,
                        date: "31/01/2024",
                        download: "https://www.youtube.com/watch?v=UuJSWbIoyGQ"
                    },
                    {
                        id: 2,
                        course: "MAH- AAC (Fine Art)",
                        subject: "MAH- AAC (Fine Art) CET 2024 Online Application Notice No.1 (English/Marathi)",
                        isNew: true,
                        date: "30/01/2024",
                        download: "https://cetcell.mahacet.org/wp-content/uploads/2023/12/Online-Application-Notice.pdf"
                    },
                    {
                        id: 3,
                        course: "All CET's",
                        subject: "Imp Notice: Dates have been Extended for various courses of CET registration for A.Y 2024-25 (English/Marathi)",
                        isNew: true,
                        date: "29/01/2024",
                        download: "https://cetcell.mahacet.org/wp-content/uploads/2023/12/Extenstion-Notice.pdf"
                    },
                    {
                        id: 4,
                        course: "All CET's",
                        subject: "As per the new rules for A.Y. 2024-25, the fee structure for CET Registrations for Transgender and Orphan candidates will be the same as that for the Reserved category.",
                        isNew: true,
                        date: "11/01/2024",
                        download: ""
                    },
                    {
                        id: 5,
                        course: "All CET's",
                        subject: "Activity Schedule for all CET Registration for A.Y. 2024-25",
                        isNew: true,
                        date: "11/01/2024",
                        download: "https://cetcell.mahacet.org/wp-content/uploads/2023/12/English-Notice-CET-2024.pdf"
                    },
                    {
                        id: 6,
                        course: "All CET's",
                        subject: "Updated Tentative Schedule for All Common Entrance Tests A.Y. 2024-25",
                        isNew: true,
                        date: "13/12/2024",
                        download: "https://cetcell.mahacet.org/wp-content/uploads/2023/08/CETCELL_Tentative_CET_Schedule2024-25.pdf"
                    }
                ])
            case "Medical Education":
                return dynamicData([
                    {
                        id: 1,
                        course: "All CET's",
                        subject: "User Manual Video for CET Registration A.Y. 2024-25",
                        isNew: true,
                        date: "31/01/2024",
                        download: "https://www.youtube.com/watch?v=UuJSWbIoyGQ"
                    },
                    {
                        id: 2,
                        course: "All CET's",
                        subject: "Imp Notice: Dates have been Extended for various courses of CET registration for A.Y 2024-25 (English/Marathi)",
                        isNew: true,
                        date: "29/01/2024",
                        download: "https://cetcell.mahacet.org/wp-content/uploads/2023/12/Extenstion-Notice.pdf"
                    },
                    {
                        id: 3,
                        course: "All CET's",
                        subject: "As per the new rules for A.Y. 2024-25, the fee structure for CET Registrations for Transgender and Orphan candidates will be the same as that for the Reserved category.",
                        isNew: true,
                        date: "11/01/2024",
                        download: ""
                    },
                    {
                        id: 4,
                        course: "All CET's",
                        subject: "Activity Schedule for all CET Registration for A.Y. 2024-25",
                        isNew: true,
                        date: "11/01/2024",
                        download: "https://cetcell.mahacet.org/wp-content/uploads/2023/12/English-Notice-CET-2024.pdf"
                    },
                    {
                        id: 5,
                        course: "All CET's",
                        subject: "Updated Tentative Schedule for All Common Entrance Tests A.Y. 2024-25",
                        isNew: true,
                        date: "13/12/2024",
                        download: "https://cetcell.mahacet.org/wp-content/uploads/2023/08/CETCELL_Tentative_CET_Schedule2024-25.pdf"
                    }
                ])
            case "AYUSH":
                return dynamicData([
                    {
                        id: 1,
                        course: "All CET's",
                        subject: "User Manual Video for CET Registration A.Y. 2024-25",
                        isNew: true,
                        date: "31/01/2024",
                        download: "https://www.youtube.com/watch?v=UuJSWbIoyGQ"
                    },
                    {
                        id: 2,
                        course: "All CET's",
                        subject: "Imp Notice: Dates have been Extended for various courses of CET registration for A.Y 2024-25 (English/Marathi)",
                        isNew: true,
                        date: "29/01/2024",
                        download: "https://cetcell.mahacet.org/wp-content/uploads/2023/12/Extenstion-Notice.pdf"
                    },
                    {
                        id: 3,
                        course: "All CET's",
                        subject: "As per the new rules for A.Y. 2024-25, the fee structure for CET Registrations for Transgender and Orphan candidates will be the same as that for the Reserved category.",
                        isNew: true,
                        date: "11/01/2024",
                        download: ""
                    },
                    {
                        id: 4,
                        course: "All CET's",
                        subject: "Activity Schedule for all CET Registration for A.Y. 2024-25",
                        isNew: true,
                        date: "11/01/2024",
                        download: "https://cetcell.mahacet.org/wp-content/uploads/2023/12/English-Notice-CET-2024.pdf"
                    },
                    {
                        id: 5,
                        course: "All CET's",
                        subject: "Updated Tentative Schedule for All Common Entrance Tests A.Y. 2024-25",
                        isNew: true,
                        date: "13/12/2024",
                        download: "https://cetcell.mahacet.org/wp-content/uploads/2023/08/CETCELL_Tentative_CET_Schedule2024-25.pdf"
                    }
                ])
            default:
                return dynamicData([
                    {
                        id: 1,
                        course: "LLB 3 Yrs",
                        subject: "Important Notice for Preparatory Passed Candidates.",
                        isNew: true,
                        date: "02/02/2024",
                        download: "https://cetcell.mahacet.org/wp-content/uploads/2023/12/Important-Notices_Preperatory-CET-2024.pdf"
                    },
                    {
                        id: 2,
                        course: "All CET's",
                        subject: "User Manual Video for CET Registration A.Y. 2024-25",
                        isNew: true,
                        date: "31/01/2024",
                        download: "https://www.youtube.com/watch?v=UuJSWbIoyGQ"
                    },
                    {
                        id: 3,
                        course: "MAH- AAC (Fine Art)",
                        subject: "MAH- AAC (Fine Art) CET 2024 Online Application Notice No.1 (English/Marathi)",
                        isNew: true,
                        date: "30/01/2024",
                        download: "https://cetcell.mahacet.org/wp-content/uploads/2023/12/Online-Application-Notice.pdf"
                    },
                    {
                        id: 4,
                        course: "All CET's",
                        subject: "Imp Notice: Dates have been Extended for various courses of CET registration for A.Y 2024-25 (English/Marathi)",
                        isNew: true,
                        date: "29/01/2024",
                        download: "https://cetcell.mahacet.org/wp-content/uploads/2023/12/Extenstion-Notice.pdf"
                    },
                    {
                        id: 5,
                        course: "Higher Courses",
                        subject: "IMP : CLARITY ABOUT BED (2Yr. RegularCourse) , BED-MED (3Yr.Int.Course) and Ba/BScBEd (4Yr. Int.Course ).",
                        isNew: true,
                        date: "12/01/2024",
                        download: "https://cetcell.mahacet.org/wp-content/uploads/2023/12/Public-Notice.pdf"
                    },
                    {
                        id: 6,
                        course: "All CET's",
                        subject: "As per the new rules for A.Y. 2024-25, the fee structure for CET Registrations for Transgender and Orphan candidates will be the same as that for the Reserved category.",
                        isNew: true,
                        date: "11/01/2024",
                        download: " "
                    },
                    {
                        id: 7,
                        course: "All CET's",
                        subject: "Activity Schedule for all CET Registration for A.Y. 2024-25",
                        isNew: true,
                        date: "11/01/2024",
                        download: "https://cetcell.mahacet.org/wp-content/uploads/2023/12/English-Notice-CET-2024.pdf"
                    },
                    {
                        id: 8,
                        course: "MHT CET, MBA/MMS, MCA, M.Arch, M.HMCT, B.HMCT, B.Design",
                        subject: "Click Here To View Syllabus of All Courses Under Technical Education A.Y. 2024-25",
                        isNew: true,
                        date: "01/01/2024",
                        download: "https://cetcell.mahacet.org/wp-content/uploads/2023/08/Technical_Education_CET_syllabus2024-25.pdf"
                    },
                    {
                        id: 9,
                        course: "All CET's",
                        subject: "Updated Tentative Schedule for All Common Entrance Tests A.Y. 2024-25",
                        isNew: true,
                        date: "13/12/2024",
                        download: "https://cetcell.mahacet.org/wp-content/uploads/2023/08/CETCELL_Tentative_CET_Schedule2024-25.pdf"
                    }
                ])
        }

    }
})
tableSection.appendChild(menuContainer)
aboutCetSection.appendChild(tableSection)


const table=document.createElement("table")
table.style.width="100%"
// table.style.height="100px"
table.className="table my-3 table-bordered border-dark border-end"
// table.style.background="red"
const tableHead=document.createElement("thead")
const tableHeadtr=document.createElement("tr")
const tablebody=document.createElement("tbody")

const tableHeadData = [{ title: "SN", width: 20 }, { title: "Course Name", width: 200 }, { title: "Subject", width: 500 }, { title: "Published Date", width: 150 }, { title: "Download", width: 50 }]

tableHeadData.forEach(function(th){
    const tableHeadth=document.createElement("th")
    tableHeadth.className="bg-warning"
    if(th.title ==="SN")
    {
        tableHeadth.style.textAlign="center"
    }
    tableHeadth.innerText=th.title
    tableHeadth.style.width=`${th.width}px`
    tableHeadth.style.fontWeight="400px"
    tableHeadtr.appendChild(tableHeadth)
  })

  table.appendChild(tableHead)
  table.appendChild(tablebody)
  tableHead.appendChild(tableHeadtr)
  menuContainer.appendChild(table)


  

//Script In bodybundle
const bundle= document.createElement("link")
bundle.ref="stylesheet"
bundle.src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
bundle.integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
bundle.crossorigin="anonymous"
document.body.appendChild(bundle)

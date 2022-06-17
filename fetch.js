
//     let search = async (api_key) =>
//     {   

// let url=`https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCef1-8eOpJgud7szVPlZQAQ&channelType=channelTypeUnspecified&eventType=none&maxResults=9&order=searchSortUnspecified&type=video&videoType=videoTypeUnspecified&key=${api_key}` 
//      let res= await fetch(url);
//         let data=await res.json();
//         //console.log(data.items)
//         return data; 
//     }
//     //search()


//     let append = (data,container) => {
     
//      //let container= document.querySelector("#container");
     
//      data.forEach(({id: {videoId },snippet:{description,thumbnails:{default:{url}}} }) => {
 
//          let div = document.createElement("div")
 
//           let iframe = document.createElement("iframe") ;
 
//  // this link we get from youtube in embeded this is use to show video
//          iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay1` ;
//          iframe.setAttribute("allow","autoplay")
          
        
  
//        let h3=document.createElement("h4");
//         h3.innerText=description;
 
//  //by onclicking what kind of material we required that is title and videoid so we put all in these in an array
//         let video =
//         {
//             description ,
//             videoId,
//             url
//         }
 
//          div.append(iframe,h3);
         
//           //so by onclicking we just go to the next page by the below function
//          div.onclick = () => {
//                 playVideo(video);
//          }
 
//          container.append(div)
//      })
//  }

//  export {search,append}
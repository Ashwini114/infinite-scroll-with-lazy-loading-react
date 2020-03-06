const initialState = {
    page1: {
        "page": {
          "title": "Romantic Comedy",
          "total-content_items" : "54",
          "page-num-requested" : "1",
          "page-size-requested" : "20",
          "page-size-returned" : "20",
          "content_items": {
            "content": [
              {
                "name": "The Birds",
                "poster_image": "poster1.jpg"
              },
              {
                "name": "Rear Window",
                "poster_image": "poster2.jpg"
              },
              {
                "name": "Family Pot",
                "poster_image": "poster3.jpg"
              },
              {
                "name": "Family Pot",
                "poster_image": "poster2.jpg"
              },
              {
                "name": "Rear Window",
                "poster_image": "poster1.jpg"
              },
              {
                "name": "The Birds",
                "poster_image": "poster3.jpg"
              },
              {
                "name": "Rear Window",
                "poster_image": "poster3.jpg"
              },
              {
                "name": "The Birds",
                "poster_image": "poster2.jpg"
              },
              {
                "name": "Family Pot",
                "poster_image": "poster1.jpg"
              },
              {
                "name": "The Birds",
                "poster_image": "poster1.jpg"
              },
                      {
                "name": "The Birds",
                "poster_image": "poster1.jpg"
              },
              {
                "name": "Rear Window",
                "poster_image": "poster2.jpg"
              },
              {
                "name": "Family Pot",
                "poster_image": "poster3.jpg"
              },
              {
                "name": "Family Pot",
                "poster_image": "poster2.jpg"
              },
              {
                "name": "Rear Window",
                "poster_image": "poster1.jpg"
              },
              {
                "name": "The Birds",
                "poster_image": "poster3.jpg"
              },
              {
                "name": "Rear Window",
                "poster_image": "poster3.jpg"
              },
              {
                "name": "The Birds",
                "poster_image": "poster2.jpg"
              },
              {
                "name": "Family Pot",
                "poster_image": "poster1.jpg"
              },
              {
                "name": "The Birds",
                "poster_image": "poster1.jpg"
              }
            ]
          }
        }
      },
      page2: {
        "page": {
          "title": "Romantic Comedy",
          "total-content_items" : "54",
          "page-num-requested" : "2",
          "page-size-requested" : "20",
          "page-size-returned" : "20",
          "content_items": {
            "content": [
              {
                "name": "Rear Window",
                "poster_image": "poster5.jpg"
              },
              {
                "name": "Family Pot",
                "poster_image": "poster6.jpg"
              },
              {
                "name": "Family Pot",
                "poster_image": "poster5.jpg"
              },
              {
                "name": "Rear Window",
                "poster_image": "poster4.jpg"
              },
              {
                "name": "The Birds",
                "poster_image": "poster6.jpg"
              },
              {
                "name": "Rear Window",
                "poster_image": "poster6.jpg"
              },
              {
                "name": "The Birds",
                "poster_image": "poster5.jpg"
              },
              {
                "name": "Family Pot",
                "poster_image": "poster4.jpg"
              },
              {
                "name": "The Birds",
                "poster_image": "poster4.jpg"
              },
              {
                "name": "Rear Window",
                "poster_image": "poster5.jpg"
              },
                      {
                "name": "Rear Window",
                "poster_image": "poster5.jpg"
              },
              {
                "name": "Family Pot",
                "poster_image": "poster6.jpg"
              },
              {
                "name": "Family Pot",
                "poster_image": "poster5.jpg"
              },
              {
                "name": "Rear Window",
                "poster_image": "poster4.jpg"
              },
              {
                "name": "The Birds",
                "poster_image": "poster6.jpg"
              },
              {
                "name": "Rear Window",
                "poster_image": "poster6.jpg"
              },
              {
                "name": "The Birds",
                "poster_image": "poster5.jpg"
              },
              {
                "name": "Family Pot",
                "poster_image": "poster4.jpg"
              },
              {
                "name": "The Birds",
                "poster_image": "poster4.jpg"
              },
              {
                "name": "Rear Window",
                "poster_image": "poster5.jpg"
              }
            ]
          }
        }
      },
      page3:{
        "page": {
          "title": "Romantic Comedy",
          "total-content_items" : "54",
          "page-num-requested" : "3",
          "page-size-requested" : "20",
          "page-size-returned" : "14",
          "content_items": {
            "content": [
              {
                "name": "Family Pot",
                "poster_image": "poster9.jpg"
              },
              {
                "name": "Family Pot",
                "poster_image": "poster8.jpg"
              },
              {
                "name": "Rear Window",
                "poster_image": "poster7.jpg"
              },
              {
                "name": "The Birds",
                "poster_image": "poster9.jpg"
              },
              {
                "name": "Rear Window",
                "poster_image": "poster9.jpg"
              },
              {
                "name": "The Birds",
                "poster_image": "poster8.jpg"
              },
              {
                "name": "Family Pot",
                "poster_image": "poster7.jpg"
              },
                     {
                "name": "Family Pot",
                "poster_image": "poster9.jpg"
              },
              {
                "name": "Family Pot",
                "poster_image": "poster8.jpg"
              },
              {
                "name": "Rear Window",
                "poster_image": "poster7.jpg"
              },
              {
                "name": "The Birds with an Extra Long Title",
                "poster_image": "poster9.jpg"
              },
              {
                "name": "Rear Window",
                "poster_image": "poster9.jpg"
              },
              {
                "name": "The Birds",
                "poster_image": "poster8.jpg"
              },
              {
                "name": "Family Pot",
                "poster_image": "placeholder_for_missing_posters.png"
              }
            ]
          }
        }
      },
      search : []
}

function rootReducer(state = initialState, action) {
    if (action.type === "SEARCH") {
      state.search = [];
      let all_contents = [...state.page1.page.content_items.content,
        ...state.page2.page.content_items.content,
      ...state.page3.page.content_items.content]
    let search_results=  all_contents.filter((item)=>item.name.toLowerCase().includes(action.payload.toLowerCase()))
     
        state.search.push(search_results);
        
      }
    return state;
};

export default rootReducer;
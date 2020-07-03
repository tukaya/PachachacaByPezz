

import React, { Component } from 'react'
import axios from 'axios'

class Activities extends Component {
    constructor(){
        super()
        this.state = {
            posts : [],
            photos: [],
            test:[]
        }
    }
    componentDidMount(){
        this.getphoto()
        this.getdata()
    }   
    getphoto=()=>{ 
        axios.get('https://jsonplaceholder.typicode.com/photos?_limit=5')
        .then((res)=>{ this.setState({photos:res.data})
        // console.log(res) 
        })
        .catch((error)=>{
            console.log(error)
        }) 
    }
    getdata=()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5')
        .then((res)=> {
             // console.log(res)
            this.setState({posts:res.data})
            this.getTest()
        })
        .catch((error)=>{
            console.log(error)
        }) 
    }  
    getTest = e => {
        let i;
        let arrTest = [];
        for(i=0; i<this.state.posts.length; i++){
            for(var j=0; j<this.state.photos.length; j++){
                if (j == i){
                    let testObj = {
                        post: this.state.posts[i],
                        photo:  this.state.photos[i]
                    }
                    arrTest.push(testObj)
                }
            }
        }
        this.setState({test: arrTest})
    } 
    render() {
        // console.log(this.state.posts)
        // console.log(this.state.test)
        // console.log(this.state.photos)
        return (
            <div>
                <div  className='divhightA'>
                    <h2>Current Activities</h2>
                    <div className='grid_div'>
                        { this.state.test && this.state.test.map(val=>{
                                let theclassname = '';
                                let test = val.post.id %2 !==0?  theclassname = 'leftdiv':theclassname = 'rightdiv';
                                return(
                                    <div className={theclassname} key={val.post.id} >
                                        <img className={theclassname} src={val.photo.url} alt={val.photo.title}/>
                                        <h4>{val.post.title} :</h4>
                                        <p>{val.post.body}.</p>
                                    </div>
                                )
                                
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}
export default Activities;

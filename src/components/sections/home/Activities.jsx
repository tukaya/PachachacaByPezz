

import React, { Component } from 'react'
import axios from 'axios'
import {Image, Grid, Segment} from 'semantic-ui-react'
// import a from '../../images/a.jpg';

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
        axios.get('https://jsonplaceholder.typicode.com/photos?_limit=2')
        .then((res)=>{ 
            this.setState({photos:res.data})
        // console.log(res) 
        })
        .catch((error)=>{
            console.log(error)
        }) 
    }
    getdata=()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts?_limit=2')
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
                if (j === i){
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
                <div  className='divhightA'>
                    <h1>Current Activities</h1>
                    <div className='grid_div'>
                        { this.state.test && this.state.test.map(val=>{
                                // let theclassname = val.post.id %2 !==1?  'leftdiv': 'rightdiv';
                                return(
                                    <div className='date' >
                                        <Grid celled >
                                            <Grid.Row >
                                                {/* <Grid.Column width={3}>
                                                    <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                                                </Grid.Column> */}
                                                <Grid.Column width={8}>
                                                <Segment> {val.post.title}</Segment>
                                               
                                                </Grid.Column>
                                                <Grid.Column width={8}>
                                                 <Image  height='250px' src={val.photo.url}></Image> 
                                                </Grid.Column>
                                            </Grid.Row>
                                        </Grid>
                                    </div>    
                                )
                                
                            })
                        }
                    </div>
                </div>
        );
    }
}
export default Activities;

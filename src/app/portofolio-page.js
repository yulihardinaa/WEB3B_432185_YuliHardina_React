import React, {Component} from 'react'; 
import PortofolioComponent from '../modules/portofolio-component.js'
import ReactGA from 'react-ga';
import $ from 'jquery';





class PortofolioPage extends Component {

    constructor(props){
      super(props);
      this.state = {
        foo: 'bar',
        resumeData: {}
      };
  
      ReactGA.initialize('UA-110570651-1');
      ReactGA.pageview(window.location.pathname);
  
    }
  
    getResumeData(){
      $.ajax({
        url:'/resumeData.json',
        dataType:'json',
        cache: false,
        success: function(data){
          this.setState({resumeData: data});
        }.bind(this),
        error: function(xhr, status, err){
          console.log(err);
          alert(err);
        }
      });
    }
  
    componentDidMount(){
      this.getResumeData();
    }


    render(){
        return (
            <PortofolioComponent
                initialData = {this.state} //ini maksudnya membuat varibel initalData yg isinya semua state yang telah dibuat
                showModal = {this.showModal} //ini maksudnya membuat variabel showmodal yang akan dipanggil, this.showmodal mksdnya itu manggil functin show modal, karena masih satu halaman pakainya this.
                handleCancel = {this.handleCancel} //sama seperti showmodal
                handleOk = {this.handleOk} //sama seperti showmodal
                data = {this.state.resumeData.portfolio}
            />
        );
    }
}

export default PortofolioPage;
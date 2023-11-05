import React, { Component } from 'react';
import Ad from '../Components/Ad';

class AdPage extends Component {  // AdPage 클래스 정의
  constructor(props) {  // 생성자 함수 사용으로 초기 상태 설정
    super(props);
    this.state = {
      showAd: true, // 초기상태: 광고 표시
    };
  }


  handleToggleClick = () => {
    this.setState((prevState) => ({
      showAd: !prevState.showAd,
    }));
  };

  render() {
    return (
      <div>
        <Ad showAd={this.state.showAd} />
        <button onClick={this.handleToggleClick} style={{cursor: "pointer"}}>
          {this.state.showAd ? '광고 숨기기' : '광고 보이기'}
        </button>
      </div>
    );
  }
}

export default AdPage;
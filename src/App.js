import "./App.css"
import { Checkbox, Col, Divider, Layout, Row } from "antd"
import { Content, Footer, Header } from "antd/es/layout/layout"
import Sider from "antd/es/layout/Sider"

const optionsElements1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const optionsElements2 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
const optionsElements3 = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
const optionsElements4 = [31, 32, 33, 34, 35, 36, 37, 38, 39, 40]
const optionsElements5 = [41, 42, 43, 44, 45, 46, 47, 48, 49, 50]
const optionsElements6 = [51, 52, 53, 54, 55, 56, 57, 58, 59, 60]
function App() {
  return (
    <>
      <Layout style={{height:'100vh'}}>
        <Header style={{backgroundColor:'#222831', display:'flex', justifyContent:'center', color:'#EEE', fontSize:'40px'}}>60 Hards</Header>
        <Layout>
          <Sider style={{backgroundColor:'#00ADB5'}}></Sider>
          <Content style={{padding:'50px', display:'flex', flexDirection:'column', alignItems:'center', backgroundColor:'#EEEEEE'}}>
            <Col style={{ padding:'50px'}}>
            <Checkbox.Group options={optionsElements1} defaultValue={[1]} />
            <Divider />
            <Checkbox.Group options={optionsElements2} defaultValue={[2]} />
            <Divider />
            <Checkbox.Group options={optionsElements3} defaultValue={[3]} />
            <Divider />
            <Checkbox.Group options={optionsElements4} defaultValue={[4]} />
            <Divider />
            <Checkbox.Group options={optionsElements5} defaultValue={[5]} />
            <Divider />
            <Checkbox.Group options={optionsElements6} defaultValue={[6]} />
            </Col>
          </Content>
          <Sider style={{backgroundColor:'#00ADB5'}}></Sider>
        </Layout>
        <Footer style={{backgroundColor:'#393E46'}}></Footer>
      </Layout>
    </>
  )
}

export default App

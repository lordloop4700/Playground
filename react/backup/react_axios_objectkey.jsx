import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from "axios";


const SidebarWrap = styled.div`
  width: 10%;
  background:rgba(0, 0, 0, 0.75);
  margin: 50px 10px 0 100px;
  float: left;
  box-shadow:0px 4px 5px rgba(0, 0, 0, 0.75);
  border-radius:4px;
  position: fixed;
  padding: 0;
`

const Item = styled.a`
width: 100%;
height: 100px;
font-family: 'Raleway', sans-serif;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
font-size: 20px;
text-decoration: none;
font-weight: 400;
color:#FFF;
&:hover {
  text-shadow:0px -40px 0px rgba(255, 255, 255, 0);
  font-weight:600;
}
`

const Align = styled.ul`
padding: 0;
`

function SideMenu() {
  const [datas, setDatas] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDatas = async () => {
      try {
        setError(null);
        setDatas(null);

        setLoading(true);
        const response = await axios.get('http://dev.codingdog.co.kr:45556/cate/read');

        setDatas(response.data.result);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    }

    fetchDatas();
  }, [])

  if (loading) return <Item>로딩중..</Item>;
  if (error) return <Item>에러가 발생했습니다</Item>;
  if (!datas) return null;

  return (
    <Align>
      {Object.keys(datas).map((key, val) => (
        <Item a href="#">{datas[key].name}</Item>
      ))}
    </Align>
  )
}

const Sidebar = () => {

  return (
    <SidebarWrap>
      <SideMenu></SideMenu>
    </SidebarWrap>
  )
}
export default Sidebar


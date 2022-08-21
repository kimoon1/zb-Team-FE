import React from "react";
import Link from 'next/link'
import styled from "styled-components";

export default function RankBox () {

  return (
    <>
      <Link href="/board/rank">
        <Box>
          랭킹 박스
        </Box>
      </Link>
    </>

  )
}

const Box = styled.section`
  width : 300px;
  height : 350px;
  border : 2px solid #49add8;

  border-radius: 20px;
  padding: 20px;

  cursor: pointer;

  position: relative;
  top: 50px;
  left : 50%;
  transform: translateX(-50%);
`


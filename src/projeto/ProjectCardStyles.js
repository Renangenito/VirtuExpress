import styled from "styled-components"

export const Li = styled.li`
    border: 1px solid #222;
    width: 24%;
    border-radius: .5em;
    margin-bottom: 2em;
    list-style: none;
        h2{
            width: 92%;
            font-size: 1.5em;
            padding: .3em;
            background-color: #0075b8;
            color: #fff;
            margin: .7em auto;
        }
        p{
            font-size: 1.3em;
            margin: .8em .8em;
            padding: 0 auto;
            text-align: justify;
            
        }
        span{
            font-weight: bold;
        }
        div{
            background-color: #fff;
            border: 1px solid #000;
            width: 92%;
            margin: 1.5em auto;
            font-size: .8em;
            min-height: 200px;
        }
        a{
            padding: .6em;
            font-size: 1em;
            margin-left: 1.1em;
            margin-bottom: .8em;
            border: 1px solid #000;
            color: #000;
           
                &:hover{
                    cursor: pointer;
                    color: #0075b8;
                    border-color: #0075b8;
                }
        }
        button{  
            padding: .5em;
            font-size: 1em;
            margin-left: 1.1em;
            margin-bottom: .8em;
            border: 1px solid #000;
            background: none;
            
                &:hover{
                    cursor: pointer;
                    color: red;
                    border-color: red;
                }
        }

`
export const Secao = styled.section`
    height: 71%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
export const DivButons = styled.section`

`
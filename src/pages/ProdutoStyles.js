import styled from "styled-components"
export const Section = styled.section`
    width: 100%;
    margin-bottom: 8em;
        section{
            display: flex;
            flex-direction: column;
            width: 60%;
            margin: 11em auto;
            padding: 2em;
            border: 1px solid #4d4d4d;
        }
        div{
            display: flex;
            justify-content: space-between;
            align-items: baseline;
        }
        h3{
            background-color: #0075b8;
            color: #FFF;
            font-size: 2em;
            padding: .4em;
            margin-bottom: 0.7em;
            min-width: 36%;
        }
        p{
            font-size: 1.3em;
            margin: .8em;
            width: 80%;
            text-align: justify;
        }
        span{
            font-weight: bold;
            padding-left: 0.8em;
            padding-top: 2em;
        }
       
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    
`


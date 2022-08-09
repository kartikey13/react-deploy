import React from 'react';


export default function App(){

    const[formdata, setFormdata] = React.useState(
    {
        email: "", 
        firstname: "", 
        lastname: "", 
        textarea:"",
        checkValid: false,
        employment: "",
        favcolor: ""
    })

    function handlechange(event){
        const {name, value, type, checked} = event.target
        setFormdata(prevdata =>  {
            return {
                ...prevdata,
                [name]: type === 'checkbox' ?  checked : value
            }
        })
    }

    console.log(formdata)

   return(
        <form>

        <fieldset>
            <legend>
                Credentials
            </legend>
            <input 
                type="email" 
                placeholder='your email'
                onChange={handlechange} 
                name="email"
                value={formdata.email}
            />

            <input 
                type="text" 
                placeholder='first name'
                onChange={handlechange} 
                name="firstname"
                value={formdata.firstname}
            />

            <input 
                type="text" 
                placeholder='last name'
                onChange={handlechange} 
                name="lastname"
                value={formdata.lastname}
            />

        </fieldset>

        <fieldset>
            <legend>TextArea</legend>
            <textarea 
                placeholder='type your text'
                name='textarea'
                onChange={handlechange}
                value={formdata.textarea}
            />
        </fieldset> 
            

            <div className='specialcheck'>
                <input
                    type="checkbox"
                    id="checkbox"
                    checked={formdata.checkValid}
                    onChange={handlechange}
                    name="checkValid"
                />
                <label htmlFor='checkbox'>Valid User</label>
            </div>

            <fieldset>
                <legend>Current Employment Status</legend>

                <input 
                    type="radio"
                    id="unemployed"
                    name='employment'
                    value="umemployed"
                    checked={formdata.employment === "unemployed"}
                    onChange={handlechange}
                />
                <label htmlFor="unemployed">Unemployed</label><br />

                <input 
                    type="radio"
                    id="part-time"
                    name='employment'
                    value="part-time"
                    checked={formdata.employment === "part-time"}
                    onChange={handlechange}
                />
                <label htmlFor="part-time">Part Time</label><br />

                <input 
                    type="radio"
                    id="full-time"
                    name='employment'
                    value="full-time"
                    checked={formdata.employment === "full-time"}
                    onChange={handlechange}
                />
                <label htmlFor="full-time">Full Time</label><br />
            </fieldset>
            
            <fieldset>
                <legend>
                    Favorite Color
                </legend>
                <select 
                    value={formdata.favcolor}
                    onChange={handlechange}
                    name="favcolor"
                >
                    <option value="">Choose</option>
                    <option value="Red">Red</option>
                    <option value="Green">Green</option>
                    <option value="Blue">Blue</option>
                    <option value="White">White</option>
                </select>
            </fieldset>
        </form>
   )
    
}
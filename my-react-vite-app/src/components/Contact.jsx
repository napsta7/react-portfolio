//This is the Contact component to be rendered when the user navigates to this page.
//There are name, email, and message fields, and the email field is set to type "email" to ensure valid input.
//This currently does not have the back-end functionality to allow a user to send an email.
function Contact() {
    return(
        <main>
            <h2 id='contactMe'>Contact Me</h2>
            <form>
                <label for='name'>Name</label>
                <input type='text' id='name' className='userInput' required></input>
                <label for='email'>Email Address</label>
                <input type='email' id='email' className = 'userInput' required></input>
                <label for='msg'>Message</label>
                <input type='text' id='msg' required></input>
                <input type='submit' id='submit'></input>
            </form>
        </main>
    );
}

export default Contact;
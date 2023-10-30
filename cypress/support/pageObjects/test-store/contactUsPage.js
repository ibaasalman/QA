class contactUsPage {
    elemnts = {
        firstName : ()=> cy.get("#ContactUsFrm_first_name"),
        email : ()=> cy.get("#ContactUsFrm_email"),
        msg : ()=> cy.get("#ContactUsFrm_enquiry"),
        submit : ()=> cy.get("button[title='Submit']"),
        validationMsg : ()=> cy.get(".contentpanel .mb40")
    }

    send (fn , em , msg ,vdmsg){
        this.elemnts.firstName().type(fn);
        this.elemnts.email().type(em);
        this.elemnts.msg().type(msg);
        this.elemnts.submit().click();
        this.elemnts.validationMsg().contains(vdmsg);
    }
}
export default contactUsPage;
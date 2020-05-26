({
    handleClick: function (cmp, event) {
        //the attribute openSections -belonging the sectiontoggle event - is of String type
        var sname = event.getSource().get("v.label");
        
        switch(sname){
            case 'Expand A':
                cmp.set("v.section", "A");
                break;

            case 'Expand B':
                cmp.set("v.section", "B");
                break;

            case 'Expand C':
                cmp.set("v.section", "C");
                break;
                
        }
       
    },

    handleSectionToggle: function (cmp, event) {
        //the attribute openSections -belonging the sectiontoggle event - is of String type
        var openSections = event.getParam('openSections');

        if (openSections.length === 0) {
            cmp.set('v.activeSectionsMessage', "All sections are closed");
        } else {
            cmp.set('v.activeSectionsMessage', "Open sections: " + openSections.join(', '));
        }
    }
})

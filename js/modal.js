function openModal(){
    jq('#modal').css('display', 'flex');
}

function closeModal(){
    jq('#modal').css('display', 'none');
}

function loadModal(page){
    openModal()
    jq('#coreModal #content').load('./components/modal/'+page+'.html');
}
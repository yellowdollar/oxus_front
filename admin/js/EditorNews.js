var quill = new Quill('#editor_news', {
    theme: 'snow',
    modules: {
        toolbar: [
            [],
            ['bold', 'italic', 'underline'],
            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
            ['link']
        ]
    }
});

function deleteNote(noteId) {
    fetch('/delete-note', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ noteId: noteId })
    })
    .then(res => res.json())
    .then(data => {
        if (data.success) {
            document.getElementById(`note-${noteId}`).remove();
        }
    });
}
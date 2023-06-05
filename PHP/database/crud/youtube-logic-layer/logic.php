<?php

    require_once "../data-access-layer/dal.php"; // will be loaded once

    function addSong($song){
        // Create add song statement
        $sql = "INSERT INTO youtube (url, title, liked) values ('$song->url','$song->title',false)";
        // $youtube->url === url field within the youtube.

        // Add the song
        $id = execute($sql);

        // Update the id
        $song->id=$id;

        // Return the song with it's new shiny id
        return $song;
    }

    // Update existing song
    function updateSong($song){
        // Create an update statement
        $sql = "UPDATE youtube SET url='$song->url', title='$song->title', liked=$song->liked WHERE id=$song.id";
    
        // Execute
        execute($sql);

        // return the song 
        return $song;
    }

    // Get all songs
    function getAllSongs(){
        $sql = "SELECT * FROM youtube";
        $result = select($sql);
        return $result;
    }

    // Get songs from 10 to 20
    function getSongRange($from,$to){
        $sql = "SELECT * FROM youtube WHERE id>=$from AND id<=$to";
        $result = execute($sql);
        return $result;
    }

    // Get songs from 10 to 20
    function getSongRangeEBAY($from,$total){
        $sql = "SELECT * FROM youtube WHERE id>=$from AND id<=($from+$total)";
        $result = execute($sql);
        return $result;
    }

?>
import tracks from './mockTracks'

export const fetchTracks = async () => {
 
    
    return new Promise(resolve => {
        resolve(tracks)
    })
}
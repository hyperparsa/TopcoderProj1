//////////////////////////////////////Mock movement on path
export default (path,fraction) => {
  const start = path[0]
  const end = path[path.length-1]
  if(path.length==1)return start
  if(fraction==1)return end
  const totalLength = google.maps.geometry.spherical.computeLength(path)
  const length = totalLength*fraction
  let tempLength=0;
  const lengths=path.slice(0,path.length-1).map((x,i)=>google.maps.geometry.spherical.computeDistanceBetween(x,path[i+1]))

  for(let i=0;i<lengths.length;i++){
    if(tempLength+lengths[i]>length)return google.maps.geometry.spherical.interpolate(path[i],path[i+1],(length-tempLength)/lengths[i])
    tempLength+=lengths[i]
  }
  return google.maps.geometry.spherical.interpolate(path[path.length-2],path[path.length-1],(length-tempLength)/lengths[lengths.length-1])
}

//////simpler mock
// export default (path,fraction) => {
//   const start = path[0]
//   const end = path[path.length-1]
//   return google.maps.geometry.spherical.interpolate(start,end,fraction)
// }

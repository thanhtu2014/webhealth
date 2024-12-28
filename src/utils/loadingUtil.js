
export function isIdle(loadingStatus) {
  return loadingStatus === 'process';
}

export function isPending(loadingStatus) {
  return loadingStatus === 'pending';
}

export function isFulfilled(loadingStatus) {
  return loadingStatus === 'success';
}

export function isRejected(loadingStatus) {
  return loadingStatus === 'rejected';
}

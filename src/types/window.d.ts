interface Window {
  MotionDebug: { record: (data: any) => void };
  MotionHandoffAnimation: () => null;
  MotionHandoffIsComplete: () => boolean;
  MotionHasOptimisedAnimation: () => boolean;
  MotionCancelOptimisedAnimation: () => void;
  MotionIsMounted: boolean;
  MotionCheckAppearSync: () => void;
}

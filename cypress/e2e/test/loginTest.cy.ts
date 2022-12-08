
⚠ Warning: It looks like you're passing --spec a space-separated list of arguments:

"C:/Users/DELL/OneDrive/Máy tính/CryPress/CrypressTest"

This will work, but it's not recommended.

If you are trying to pass multiple arguments, separate them with commas instead:
  cypress run --spec arg1,arg2,arg3
  
The most common cause of this warning is using an unescaped glob pattern. If you are
trying to pass a glob pattern, escape it using quotes:
  cypress run --spec "**/*.spec.js"


Can't run because no spec files were found.

We searched for specs matching this glob pattern:

  > C:\Users\DELL\OneDrive\Máy,C:\Users\DELL\OneDrive\Máy tính\CryPress\CrypressTest\tính\CryPress\CrypressTest

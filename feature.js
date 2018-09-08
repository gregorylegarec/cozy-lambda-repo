const options = {
  key: value,
  otherkey: othervalue
}

const text = "content"

const foo = "bar"

const conflict = text

const hello = "world"

if (conflict) {
  process.exit(1)
}

// comment for 0.4.2
return

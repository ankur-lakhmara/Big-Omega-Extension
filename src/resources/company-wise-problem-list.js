const problemToCompanyMatcher = {
	"leetcode.com": {
		"minimum-consecutive-cards-to-pick-up": [{ company: "Google", num_occur: 1 }],
		"remove-digit-from-number-to-maximize-result": [{ company: "Microsoft", num_occur: 2 }],
		"minimum-average-difference": [{ company: "Amazon", num_occur: 1 }],
		"count-prefixes-of-a-given-string": [{ company: "Google", num_occur: 1 }],
		"intersection-of-multiple-arrays": [{ company: "Uber", num_occur: 1 }],
		"minimum-rounds-to-complete-all-tasks": [{ company: "Amazon", num_occur: 1 }],
		"calculate-digit-sum-of-a-string": [{ company: "Uber", num_occur: 1 }],
		"find-closest-number-to-zero": [{ company: "Tiger Analytics", num_occur: 1 }],
		"minimum-bit-flips-to-convert-number": [{ company: "persistent systems", num_occur: 1 }],
		"find-the-difference-of-two-arrays": [{ company: "Google", num_occur: 1 }],
		"count-hills-and-valleys-in-an-array": [{ company: "Facebook", num_occur: 1 }],
		"minimum-operations-to-halve-array-sum": [{ company: "Microsoft", num_occur: 1 }],
		"divide-array-into-equal-pairs": [{ company: "Microsoft", num_occur: 1 }],
		"count-artifacts-that-can-be-extracted": [{ company: "IMC", num_occur: 1 }],
		"find-all-k-distant-indices-in-an-array": [{ company: "Google", num_occur: 1 }],
		"most-frequent-number-following-key-in-an-array": [{ company: "Google", num_occur: 1 }],
		"minimum-number-of-steps-to-make-two-strings-anagram-ii": [{ company: "Wealthfront", num_occur: 1 }],
		"counting-words-with-a-given-prefix": [{ company: "Google", num_occur: 1 }],
		"construct-string-with-repeat-limit": [{ company: "Arista Networks", num_occur: 1 }],
		"merge-nodes-in-between-zeros": [{ company: "Microsoft", num_occur: 1 }],
		"count-integers-with-even-digit-sum": [{ company: "MindTree", num_occur: 1 }],
		"find-three-consecutive-integers-that-sum-to-a-given-number": [{ company: "FPT", num_occur: 1 }],
		"count-equal-and-divisible-pairs-in-an-array": [{ company: "zeta suite", num_occur: 1 }],
		"count-operations-to-obtain-zero": [{ company: "payu", num_occur: 1 }],
		"design-bitset": [{ company: "Bloomberg", num_occur: 2 }],
		"smallest-value-of-the-rearranged-number": [{ company: "Cognizant", num_occur: 1 }],
		"sort-even-and-odd-indices-independently": [{ company: "Zoho", num_occur: 1 }],
		"partition-array-according-to-given-pivot": [{ company: "Amazon", num_occur: 1 }],
		"minimum-sum-of-four-digit-number-after-splitting-digits": [{ company: "Amazon", num_occur: 1 }],
		"all-divisions-with-the-highest-score-of-a-binary-array": [{ company: "Google", num_occur: 1 }],
		"keep-multiplying-found-values-by-two": [{ company: "Goldman Sachs", num_occur: 1 }],
		"find-all-lonely-numbers-in-the-array": [{ company: "Google", num_occur: 1 }],
		"rearrange-array-elements-by-sign": [{ company: "Amazon", num_occur: 1 }],
		"minimum-moves-to-reach-target-score": [{ company: "Wayfair", num_occur: 1 }],
		"divide-a-string-into-groups-of-size-k": [{ company: "Canonical", num_occur: 1 }],
		"minimum-swaps-to-group-all-1s-together-ii": [{ company: "Amazon", num_occur: 2 }],
		"check-if-every-row-and-column-contains-all-numbers": [
			{ company: "Karat", num_occur: 4 },
			{ company: "instacart", num_occur: 2 }
		],
		"maximum-twin-sum-of-a-linked-list": [{ company: "Amazon", num_occur: 23 }],
		"destroying-asteroids": [{ company: "Google", num_occur: 1 }],
		"number-of-laser-beams-in-a-bank": [{ company: "Amazon", num_occur: 6 }],
		"check-if-all-as-appears-before-all-bs": [{ company: "Microsoft", num_occur: 1 }],
		"check-if-a-parentheses-string-can-be-valid": [{ company: "Amazon", num_occur: 2 }],
		"maximum-number-of-words-found-in-sentences": [{ company: "Google", num_occur: 1 }],
		"number-of-smooth-descent-periods-of-a-stock": [{ company: "Amazon", num_occur: 4 }],
		"adding-spaces-to-a-string": [{ company: "Amazon", num_occur: 1 }],
		"rings-and-rods": [{ company: "Google", num_occur: 6 }],
		"find-subsequence-of-length-k-with-the-largest-sum": [{ company: "Accenture", num_occur: 1 }],
		"k-radius-subarray-averages": [{ company: "Facebook", num_occur: 3 }],
		"find-target-indices-after-sorting-array": [
			{ company: "Google", num_occur: 4 },
			{ company: "Facebook", num_occur: 2 }
		],
		"minimum-number-of-buckets-required-to-collect-rainwater-from-houses": [{ company: "Grab", num_occur: 1 }],
		"count-common-words-with-one-occurrence": [{ company: "Jane Street", num_occur: 1 }],
		"range-frequency-queries": [{ company: "Quora", num_occur: 1 }],
		"watering-plants": [{ company: "Google", num_occur: 1 }],
		"two-furthest-houses-with-different-colors": [{ company: "Amazon", num_occur: 2 }],
		"process-restricted-friend-requests": [{ company: "Facebook", num_occur: 5 }],
		"decode-the-slanted-ciphertext": [{ company: "Amazon", num_occur: 1 }],
		"reverse-nodes-in-even-length-groups": [{ company: "Zopsmart", num_occur: 1 }],
		"time-needed-to-buy-tickets": [{ company: "Twitter", num_occur: 2 }],
		"most-beautiful-item-for-each-query": [{ company: "Postmates", num_occur: 1 }],
		"check-whether-two-strings-are-almost-equivalent": [{ company: "Salesforce", num_occur: 1 }],
		"count-vowel-substrings-of-a-string": [{ company: "Commvault", num_occur: 1 }],
		"find-the-minimum-and-maximum-number-of-nodes-between-critical-points": [{ company: "Info Edge", num_occur: 1 }],
		"smallest-index-with-equal-value": [{ company: "Google", num_occur: 1 }],
		"plates-between-candles": [
			{ company: "Amazon", num_occur: 3 },
			{ company: "tiktok", num_occur: 3 }
		],
		"two-best-non-overlapping-events": [{ company: "razorpay", num_occur: 1 }],
		"kth-distinct-string-in-an-array": [{ company: "Amazon", num_occur: 1 }],
		"parallel-courses-iii": [{ company: "Pinterest", num_occur: 4 }],
		"next-greater-numerically-balanced-number": [{ company: "Sprinklr", num_occur: 1 }],
		"number-of-valid-words-in-a-sentence": [{ company: "Amazon", num_occur: 2 }],
		"simple-bank-system": [{ company: "PhonePe", num_occur: 1 }],
		"check-if-numbers-are-ascending-in-a-sentence": [{ company: "Apple", num_occur: 2 }],
		"the-time-when-the-network-becomes-idle": [{ company: "Deutsche Bank", num_occur: 1 }],
		"remove-colored-pieces-if-both-neighbors-are-the-same-color": [{ company: "Walmart Global Tech", num_occur: 9 }],
		"stock-price-fluctuation": [{ company: "Google", num_occur: 30 }],
		"minimum-operations-to-make-a-uni-value-grid": [{ company: "Facebook", num_occur: 3 }],
		"two-out-of-three": [{ company: "Booking.com", num_occur: 1 }],
		"find-missing-observations": [{ company: "Microsoft", num_occur: 1 }],
		"minimum-moves-to-convert-string": [{ company: "Jeavio", num_occur: 1 }],
		"maximize-the-confusion-of-an-exam": [{ company: "Amazon", num_occur: 2 }],
		"number-of-pairs-of-strings-with-concatenation-equal-to-target": [{ company: "Facebook", num_occur: 2 }],
		"convert-1d-array-into-2d-array": [{ company: "Google", num_occur: 1 }],
		"check-if-word-can-be-placed-in-crossword": [{ company: "Google", num_occur: 4 }],
		"grid-game": [{ company: "T System", num_occur: 1 }],
		"maximum-difference-between-increasing-elements": [
			{ company: "Cisco", num_occur: 6 },
			{ company: "Expedia", num_occur: 3 }
		],
		"sum-of-beauty-in-the-array": [{ company: "Amazon", num_occur: 1 }],
		"find-original-array-from-doubled-array": [
			{ company: "Google", num_occur: 14 },
			{ company: "Microsoft", num_occur: 2 }
		],
		"count-number-of-pairs-with-absolute-difference-k": [{ company: "Amazon", num_occur: 1 }],
		"reverse-prefix-of-word": [{ company: "Optum", num_occur: 1 }],
		"the-number-of-weak-characters-in-the-game": [
			{ company: "ByteDance", num_occur: 4 },
			{ company: "Google", num_occur: 3 },
			{ company: "tiktok", num_occur: 3 }
		],
		"find-all-groups-of-farmland": [{ company: "Citrix", num_occur: 1 }],
		"find-the-middle-index-in-array": [{ company: "Facebook", num_occur: 3 }],
		"find-the-kth-largest-integer-in-the-array": [{ company: "Facebook", num_occur: 4 }],
		"minimize-the-difference-between-target-and-chosen-elements": [{ company: "Amazon", num_occur: 1 }],
		"find-unique-binary-string": [{ company: "Amazon", num_occur: 2 }],
		"find-greatest-common-divisor-of-array": [{ company: "TIAA", num_occur: 1 }],
		"minimum-time-to-type-word-using-special-typewriter": [{ company: "tiktok", num_occur: 3 }],
		"find-if-path-exists-in-graph": [
			{ company: "Amazon", num_occur: 4 },
			{ company: "Google", num_occur: 3 }
		],
		"array-with-elements-not-equal-to-average-of-neighbors": [{ company: "Amazon", num_occur: 2 }],
		"number-of-strings-that-appear-as-substrings-in-word": [{ company: "Uber", num_occur: 1 }],
		"binary-searchable-numbers-in-an-unsorted-array": [{ company: "Google", num_occur: 1 }],
		"check-if-string-is-a-prefix-of-array": [{ company: "Uber", num_occur: 1 }],
		"delete-characters-to-make-fancy-string": [{ company: "Wayfair", num_occur: 1 }],
		"three-divisors": [{ company: "Microsoft", num_occur: 1 }],
		"sum-of-digits-of-string-after-convert": [{ company: "Microsoft", num_occur: 1 }],
		"check-if-all-characters-have-equal-number-of-occurrences": [{ company: "Bolt", num_occur: 5 }],
		"maximum-number-of-words-you-can-type": [{ company: "Quora", num_occur: 1 }],
		"concatenation-of-array": [
			{ company: "Google", num_occur: 4 },
			{ company: "Adobe", num_occur: 2 }
		],
		"nearest-exit-from-entrance-in-maze": [{ company: "Amazon", num_occur: 2 }],
		"count-square-sum-triples": [{ company: "Amazon", num_occur: 2 }],
		"build-array-from-permutation": [
			{ company: "Apple", num_occur: 5 },
			{ company: "Adobe", num_occur: 3 },
			{ company: "Uber", num_occur: 2 },
			{ company: "Google", num_occur: 2 }
		],
		"remove-all-occurrences-of-a-substring": [
			{ company: "Microsoft", num_occur: 3 },
			{ company: "MakeMyTrip", num_occur: 2 },
			{ company: "Google", num_occur: 2 },
			{ company: "Amazon", num_occur: 2 }
		],
		"remove-one-element-to-make-the-array-strictly-increasing": [{ company: "Facebook", num_occur: 2 }],
		"the-number-of-full-rounds-you-have-played": [{ company: "Wayfair", num_occur: 4 }],
		"redistribute-characters-to-make-all-strings-equal": [{ company: "Moengage", num_occur: 1 }],
		"check-if-all-the-integers-in-a-range-are-covered": [{ company: "Bloomberg", num_occur: 1 }],
		"cutting-ribbons": [{ company: "Facebook", num_occur: 31 }],
		"determine-whether-matrix-can-be-obtained-by-rotation": [{ company: "Adobe", num_occur: 2 }],
		"minimize-maximum-pair-sum-in-array": [{ company: "Google", num_occur: 3 }],
		"substrings-of-size-three-with-distinct-characters": [{ company: "Quora", num_occur: 1 }],
		"minimize-product-sum-of-two-arrays": [{ company: "Google", num_occur: 1 }],
		"longer-contiguous-segments-of-ones-than-zeros": [{ company: "Amazon", num_occur: 2 }],
		"sum-of-all-subset-xor-totals": [{ company: "Adobe", num_occur: 2 }],
		"sum-of-floored-pairs": [{ company: "Rakuten", num_occur: 1 }],
		"rotating-the-box": [
			{ company: "Uber", num_occur: 4 },
			{ company: "Netflix", num_occur: 4 },
			{ company: "eBay", num_occur: 2 },
			{ company: "Capital One", num_occur: 2 }
		],
		"incremental-memory-leak": [{ company: "tiktok", num_occur: 1 }],
		"sorting-the-sentence": [
			{ company: "Google", num_occur: 2 },
			{ company: "Adobe", num_occur: 2 }
		],
		"maximum-population-year": [
			{ company: "Google", num_occur: 2 },
			{ company: "Cisco", num_occur: 2 },
			{ company: "Bloomberg", num_occur: 2 }
		],
		"minimum-distance-to-the-target-element": [{ company: "Honeywell", num_occur: 1 }],
		"seat-reservation-manager": [{ company: "Dropbox", num_occur: 1 }],
		"replace-all-digits-with-characters": [
			{ company: "Adobe", num_occur: 2 },
			{ company: "Google", num_occur: 1 }
		],
		"remove-duplicates-from-an-unsorted-linked-list": [
			{ company: "Microsoft", num_occur: 2 },
			{ company: "Goldman Sachs", num_occur: 2 }
		],
		"check-if-the-sentence-is-pangram": [
			{ company: "Goldman Sachs", num_occur: 3 },
			{ company: "Facebook", num_occur: 2 }
		],
		"maximum-xor-for-each-query": [{ company: "Uber", num_occur: 1 }],
		"queries-on-number-of-points-inside-a-circle": [{ company: "Google", num_occur: 1 }],
		"minimum-operations-to-make-the-array-increasing": [
			{ company: "Apple", num_occur: 2 },
			{ company: "Deutsche Bank", num_occur: 1 }
		],
		"faulty-sensor": [{ company: "Facebook", num_occur: 1 }],
		"find-the-winner-of-the-circular-game": [
			{ company: "Goldman Sachs", num_occur: 4 },
			{ company: "Bloomberg", num_occur: 2 }
		],
		"sign-of-the-product-of-an-array": [{ company: "Microsoft", num_occur: 45 }],
		"finding-the-users-active-minutes": [{ company: "Twitter", num_occur: 10 }],
		"truncate-sentence": [{ company: "Bloomberg", num_occur: 1 }],
		"count-nice-pairs-in-an-array": [{ company: "Uber", num_occur: 3 }],
		"sentence-similarity-iii": [{ company: "Google", num_occur: 1 }],
		"determine-color-of-a-chessboard-square": [{ company: "JPMorgan", num_occur: 1 }],
		"evaluate-the-bracket-pairs-of-a-string": [{ company: "Google", num_occur: 2 }],
		"minimum-number-of-operations-to-reinitialize-a-permutation": [{ company: "Google", num_occur: 1 }],
		"number-of-different-integers-in-a-string": [{ company: "Expedia", num_occur: 2 }],
		"implement-trie-ii-prefix-tree": [
			{ company: "Apple", num_occur: 2 },
			{ company: "Docusign", num_occur: 2 }
		],
		"maximum-ascending-subarray-sum": [{ company: "tcs", num_occur: 1 }],
		"design-authentication-manager": [{ company: "Twitter", num_occur: 1 }],
		"second-largest-digit-in-a-string": [{ company: "Softwire", num_occur: 1 }],
		"maximum-average-pass-ratio": [{ company: "Amazon", num_occur: 2 }],
		"find-center-of-star-graph": [{ company: "Microsoft", num_occur: 1 }],
		"check-if-one-string-swap-can-make-strings-equal": [{ company: "Facebook", num_occur: 2 }],
		"minimum-elements-to-add-to-form-a-given-sum": [{ company: "Twitter", num_occur: 1 }],
		"check-if-binary-string-has-at-most-one-segment-of-ones": [{ company: "Cisco", num_occur: 1 }],
		"sum-of-beauty-of-all-substrings": [{ company: "Google", num_occur: 1 }],
		"check-if-number-is-a-sum-of-powers-of-three": [{ company: "Microsoft", num_occur: 2 }],
		"find-nearest-point-that-has-the-same-x-or-y-coordinate": [{ company: "DoorDash", num_occur: 3 }],
		"equal-sum-arrays-with-minimum-number-of-operations": [
			{ company: "HRT", num_occur: 7 },
			{ company: "Microsoft", num_occur: 2 }
		],
		"closest-dessert-cost": [
			{ company: "ByteDance", num_occur: 3 },
			{ company: "tiktok", num_occur: 2 },
			{ company: "Microsoft", num_occur: 2 }
		],
		"count-items-matching-a-rule": [
			{ company: "Adobe", num_occur: 3 },
			{ company: "Facebook", num_occur: 2 }
		],
		"sort-features-by-popularity": [{ company: "Amazon", num_occur: 2 }],
		"minimum-number-of-operations-to-move-all-balls-to-each-box": [{ company: "Amazon", num_occur: 2 }],
		"merge-strings-alternately": [{ company: "Uber", num_occur: 3 }],
		"map-of-highest-peak": [
			{ company: "Google", num_occur: 2 },
			{ company: "Microsoft", num_occur: 2 }
		],
		"form-array-by-concatenating-subarrays-of-another-array": [{ company: "Amazon", num_occur: 1 }],
		"longest-nice-substring": [{ company: "Microsoft", num_occur: 4 }],
		"count-number-of-homogenous-substrings": [{ company: "Virtu Financial", num_occur: 1 }],
		"minimum-changes-to-make-alternating-binary-string": [{ company: "Tesla", num_occur: 2 }],
		"design-most-recently-used-queue": [{ company: "Google", num_occur: 1 }],
		"largest-merge-of-two-strings": [{ company: "Snapchat", num_occur: 1 }],
		"maximum-score-from-removing-stones": [{ company: "Bloomberg", num_occur: 2 }],
		"check-if-array-is-sorted-and-rotated": [{ company: "Amazon", num_occur: 2 }],
		"minimum-length-of-string-after-deleting-similar-ends": [{ company: "Goldman Sachs", num_occur: 1 }],
		"maximum-absolute-sum-of-any-subarray": [
			{ company: "Amazon", num_occur: 2 },
			{ company: "Adobe", num_occur: 2 }
		],
		"sum-of-unique-elements": [{ company: "Facebook", num_occur: 2 }],
		"maximum-subarray-sum-after-one-operation": [{ company: "Sprinklr", num_occur: 1 }],
		"palindrome-partitioning-iv": [{ company: "tcs", num_occur: 1 }],
		"restore-the-array-from-adjacent-pairs": [{ company: "Capital One", num_occur: 2 }],
		"maximum-number-of-balls-in-a-box": [
			{ company: "Microsoft", num_occur: 2 },
			{ company: "AppDynamics", num_occur: 1 }
		],
		"latest-time-by-replacing-hidden-digits": [{ company: "Google", num_occur: 1 }],
		"minimum-number-of-people-to-teach": [{ company: "Duolingo", num_occur: 2 }],
		"find-the-highest-altitude": [{ company: "Apple", num_occur: 3 }],
		"largest-submatrix-with-rearrangements": [{ company: "Google", num_occur: 1 }],
		"tuple-with-same-product": [{ company: "Google", num_occur: 1 }],
		"number-of-rectangles-that-can-form-the-largest-square": [{ company: "AllinCall", num_occur: 1 }],
		"swapping-nodes-in-a-linked-list": [
			{ company: "Amazon", num_occur: 3 },
			{ company: "Facebook", num_occur: 3 },
			{ company: "Bloomberg", num_occur: 2 }
		],
		"construct-the-lexicographically-largest-valid-sequence": [
			{ company: "Salesforce", num_occur: 3 },
			{ company: "Facebook", num_occur: 1 }
		],
		"maximum-score-from-removing-substrings": [{ company: "Google", num_occur: 1 }],
		"calculate-money-in-leetcode-bank": [{ company: "edabit", num_occur: 1 }],
		"count-good-meals": [
			{ company: "Amazon", num_occur: 2 },
			{ company: "Adobe", num_occur: 2 },
			{ company: "Robinhood", num_occur: 1 }
		],
		"maximum-units-on-a-truck": [
			{ company: "Amazon", num_occur: 29 },
			{ company: "JPMorgan", num_occur: 2 },
			{ company: "LinkedIn", num_occur: 2 }
		],
		"largest-subarray-length-k": [{ company: "Google", num_occur: 1 }],
		"maximum-number-of-eaten-apples": [
			{ company: "Microsoft", num_occur: 2 },
			{ company: "Uber", num_occur: 1 }
		],
		"number-of-students-unable-to-eat-lunch": [{ company: "Flipkart", num_occur: 7 }],
		"maximum-erasure-value": [{ company: "Cashfree", num_occur: 1 }],
		"reformat-phone-number": [{ company: "Toptal", num_occur: 3 }],
		"stone-game-vii": [{ company: "Dunzo", num_occur: 1 }],
		"partitioning-into-minimum-number-of-deci-binary-numbers": [{ company: "Apple", num_occur: 2 }],
		"count-of-matches-in-tournament": [{ company: "Adobe", num_occur: 2 }],
		"stone-game-vi": [{ company: "APT Portfolio", num_occur: 1 }],
		"concatenation-of-consecutive-binary-numbers": [{ company: "Google", num_occur: 3 }],
		"max-number-of-k-sum-pairs": [{ company: "Amazon", num_occur: 2 }],
		"goal-parser-interpretation": [{ company: "Apple", num_occur: 2 }],
		"minimize-deviation-in-array": [{ company: "Amazon", num_occur: 2 }],
		"find-the-most-competitive-subsequence": [{ company: "Google", num_occur: 2 }],
		"richest-customer-wealth": [{ company: "Adobe", num_occur: 2 }],
		"design-front-middle-back-queue": [{ company: "Amazon", num_occur: 3 }],
		"maximum-repeating-substring": [{ company: "Pure Storage", num_occur: 3 }],
		"ways-to-make-a-fair-array": [
			{ company: "Microsoft", num_occur: 2 },
			{ company: "Dunzo", num_occur: 1 }
		],
		"smallest-string-with-a-given-numeric-value": [{ company: "Adobe", num_occur: 2 }],
		"check-if-two-string-arrays-are-equivalent": [
			{ company: "Apple", num_occur: 2 },
			{ company: "Facebook", num_occur: 1 }
		],
		"minimum-operations-to-reduce-x-to-zero": [
			{ company: "Google", num_occur: 3 },
			{ company: "Amazon", num_occur: 2 }
		],
		"determine-if-two-strings-are-close": [{ company: "Postmates", num_occur: 1 }],
		"design-an-ordered-stream": [{ company: "Bloomberg", num_occur: 20 }],
		"lowest-common-ancestor-of-a-binary-tree-iii": [
			{ company: "Facebook", num_occur: 156 },
			{ company: "Microsoft", num_occur: 5 },
			{ company: "LinkedIn", num_occur: 5 },
			{ company: "Amazon", num_occur: 3 },
			{ company: "Google", num_occur: 3 },
			{ company: "Spotify", num_occur: 2 },
			{ company: "Sumologic", num_occur: 2 }
		],
		"lowest-common-ancestor-of-a-binary-tree-ii": [{ company: "Facebook", num_occur: 8 }],
		"furthest-building-you-can-reach": [
			{ company: "Amazon", num_occur: 5 },
			{ company: "Google", num_occur: 3 },
			{ company: "Microsoft", num_occur: 2 }
		],
		"count-sorted-vowel-strings": [
			{ company: "Google", num_occur: 3 },
			{ company: "Salesforce", num_occur: 2 }
		],
		"check-array-formation-through-concatenation": [{ company: "Facebook", num_occur: 2 }],
		"widest-vertical-area-between-two-points-containing-no-points": [{ company: "Microsoft", num_occur: 1 }],
		"sort-array-by-increasing-frequency": [
			{ company: "Amazon", num_occur: 5 },
			{ company: "Oracle", num_occur: 3 },
			{ company: "Twilio", num_occur: 2 },
			{ company: "Google", num_occur: 2 },
			{ company: "C3 IoT", num_occur: 2 }
		],
		"arithmetic-subarrays": [{ company: "Bloomberg", num_occur: 2 }],
		"slowest-key": [
			{ company: "Amazon", num_occur: 17 },
			{ company: "Walmart Global Tech", num_occur: 2 }
		],
		"design-an-expression-tree-with-evaluate-function": [{ company: "Amazon", num_occur: 7 }],
		"best-team-with-no-conflicts": [
			{ company: "Uber", num_occur: 2 },
			{ company: "Morgan Stanley", num_occur: 1 }
		],
		"lexicographically-smallest-string-after-applying-operations": [{ company: "JP Morgan", num_occur: 1 }],
		"largest-substring-between-two-equal-characters": [{ company: "Google", num_occur: 2 }],
		"coordinate-with-maximum-network-quality": [{ company: "peak6", num_occur: 1 }],
		"mean-of-array-after-removing-some-elements": [{ company: "Google", num_occur: 1 }],
		"maximum-nesting-depth-of-the-parentheses": [
			{ company: "Bloomberg", num_occur: 4 },
			{ company: "Facebook", num_occur: 3 }
		],
		"even-odd-tree": [
			{ company: "JPMorgan", num_occur: 3 },
			{ company: "Bloomberg", num_occur: 1 }
		],
		"special-array-with-x-elements-greater-than-or-equal-x": [{ company: "Google", num_occur: 1 }],
		"alert-using-same-key-card-three-or-more-times-in-a-one-hour-period": [
			{ company: "Karat", num_occur: 16 },
			{ company: "Robinhood", num_occur: 8 },
			{ company: "Wayfair", num_occur: 5 },
			{ company: "Indeed", num_occur: 4 }
		],
		"design-parking-system": [{ company: "Amazon", num_occur: 12 }],
		"maximum-number-of-achievable-transfer-requests": [
			{ company: "Adobe", num_occur: 2 },
			{ company: "Amazon", num_occur: 1 }
		],
		"crawler-log-folder": [{ company: "Mercari", num_occur: 1 }],
		"rearrange-spaces-between-words": [{ company: "Google", num_occur: 4 }],
		"sum-of-all-odd-length-subarrays": [
			{ company: "Adobe", num_occur: 3 },
			{ company: "Amazon", num_occur: 2 },
			{ company: "Apple", num_occur: 2 }
		],
		"count-unhappy-friends": [{ company: "Bloomberg", num_occur: 3 }],
		"special-positions-in-a-binary-matrix": [{ company: "Uber", num_occur: 2 }],
		"replace-all-s-to-avoid-consecutive-repeating-characters": [{ company: "Microsoft", num_occur: 2 }],
		"shortest-subarray-to-be-removed-to-make-array-sorted": [
			{ company: "Amazon", num_occur: 4 },
			{ company: "Flipkart", num_occur: 2 }
		],
		"matrix-diagonal-sum": [
			{ company: "Bloomberg", num_occur: 2 },
			{ company: "Amazon", num_occur: 2 }
		],
		"dot-product-of-two-sparse-vectors": [
			{ company: "Facebook", num_occur: 121 },
			{ company: "Google", num_occur: 4 },
			{ company: "Amazon", num_occur: 2 },
			{ company: "Microsoft", num_occur: 2 },
			{ company: "Bloomberg", num_occur: 2 }
		],
		"maximum-length-of-subarray-with-positive-product": [
			{ company: "Amazon", num_occur: 29 },
			{ company: "Arcesium", num_occur: 4 },
			{ company: "Adobe", num_occur: 2 }
		],
		"detect-pattern-of-length-m-repeated-k-or-more-times": [{ company: "HRT", num_occur: 1 }],
		"maximum-number-of-coins-you-can-get": [
			{ company: "Flipkart", num_occur: 3 },
			{ company: "Dunzo", num_occur: 2 }
		],
		"most-visited-sector-in-a-circular-track": [{ company: "IBM", num_occur: 6 }],
		"minimum-numbers-of-function-calls-to-make-target-array": [{ company: "Amazon", num_occur: 1 }],
		"minimum-number-of-vertices-to-reach-all-nodes": [
			{ company: "Google", num_occur: 2 },
			{ company: "Amazon", num_occur: 2 }
		],
		"thousand-separator": [{ company: "Uber", num_occur: 2 }],
		"minimum-operations-to-make-array-equal": [{ company: "Microsoft", num_occur: 2 }],
		"three-consecutive-odds": [{ company: "DJI", num_occur: 1 }],
		"find-kth-bit-in-nth-binary-string": [{ company: "Rupeek", num_occur: 1 }],
		"make-the-string-great": [
			{ company: "Adobe", num_occur: 2 },
			{ company: "Google", num_occur: 1 }
		],
		"minimum-insertions-to-balance-a-parentheses-string": [
			{ company: "Facebook", num_occur: 4 },
			{ company: "Microsoft", num_occur: 4 }
		],
		"kth-missing-positive-number": [
			{ company: "Facebook", num_occur: 28 },
			{ company: "tiktok", num_occur: 3 },
			{ company: "Microsoft", num_occur: 2 },
			{ company: "Google", num_occur: 2 },
			{ company: "Amazon", num_occur: 2 }
		],
		"find-the-winner-of-an-array-game": [{ company: "Directi", num_occur: 1 }],
		"count-good-triplets": [{ company: "Google", num_occur: 2 }],
		"shuffle-string": [{ company: "Google", num_occur: 2 }],
		"minimum-number-of-increments-on-subarrays-to-form-a-target-array": [{ company: "Google", num_occur: 4 }],
		"number-of-good-ways-to-split-a-string": [{ company: "Amazon", num_occur: 2 }],
		"number-of-sub-arrays-with-odd-sum": [
			{ company: "Google", num_occur: 2 },
			{ company: "Apple", num_occur: 2 }
		],
		"count-odd-numbers-in-an-interval-range": [
			{ company: "Accenture", num_occur: 2 },
			{ company: "Apple", num_occur: 2 },
			{ company: "Amazon", num_occur: 2 },
			{ company: "Adobe", num_occur: 2 }
		],
		"water-bottles": [
			{ company: "IBM", num_occur: 4 },
			{ company: "Amazon", num_occur: 2 },
			{ company: "Microsoft", num_occur: 1 }
		],
		"path-with-maximum-probability": [{ company: "Google", num_occur: 5 }],
		"number-of-good-pairs": [
			{ company: "Microsoft", num_occur: 3 },
			{ company: "Amazon", num_occur: 3 },
			{ company: "Adobe", num_occur: 2 }
		],
		"range-sum-of-sorted-subarray-sums": [{ company: "Google", num_occur: 1 }],
		"reformat-date": [
			{ company: "Expedia", num_occur: 14 },
			{ company: "tiktok", num_occur: 10 },
			{ company: "Walmart Global Tech", num_occur: 2 }
		],
		"can-make-arithmetic-progression-from-sequence": [{ company: "Amazon", num_occur: 1 }],
		"path-crossing": [{ company: "Google", num_occur: 2 }],
		"longest-subarray-of-1s-after-deleting-one-element": [{ company: "Yandex", num_occur: 3 }],
		"the-kth-factor-of-n": [
			{ company: "Amazon", num_occur: 25 },
			{ company: "Expedia", num_occur: 6 }
		],
		"average-salary-excluding-the-minimum-and-maximum-salary": [
			{ company: "Amazon", num_occur: 2 },
			{ company: "Netsuite", num_occur: 1 }
		],
		"clone-n-ary-tree": [{ company: "Google", num_occur: 2 }],
		"making-file-names-unique": [
			{ company: "Expedia", num_occur: 14 },
			{ company: "Microsoft", num_occur: 2 }
		],
		"xor-operation-in-an-array": [{ company: "Bloomberg", num_occur: 2 }],
		"clone-binary-tree-with-random-pointer": [{ company: "Facebook", num_occur: 2 }],
		"minimum-number-of-days-to-make-m-bouquets": [{ company: "Google", num_occur: 2 }],
		"least-number-of-unique-integers-after-k-removals": [
			{ company: "Amazon", num_occur: 5 },
			{ company: "Expedia", num_occur: 4 },
			{ company: "Booking.com", num_occur: 3 },
			{ company: "Salesforce", num_occur: 2 }
		],
		"running-sum-of-1d-array": [{ company: "Microsoft", num_occur: 2 }],
		"subrectangle-queries": [{ company: "Nuro", num_occur: 1 }],
		"final-prices-with-a-special-discount-in-a-shop": [{ company: "Amazon", num_occur: 2 }],
		"delete-n-nodes-after-m-nodes-of-a-linked-list": [{ company: "Microsoft", num_occur: 1 }],
		"design-browser-history": [
			{ company: "Bloomberg", num_occur: 9 },
			{ company: "Roblox", num_occur: 5 },
			{ company: "Amazon", num_occur: 3 },
			{ company: "Oracle", num_occur: 2 }
		],
		"the-k-strongest-values-in-an-array": [{ company: "Google", num_occur: 1 }],
		"shuffle-the-array": [
			{ company: "Apple", num_occur: 3 },
			{ company: "Amazon", num_occur: 2 }
		],
		"find-all-the-lonely-nodes": [{ company: "Microsoft", num_occur: 1 }],
		"reorder-routes-to-make-all-paths-lead-to-the-city-zero": [
			{ company: "DRW", num_occur: 4 },
			{ company: "Amazon", num_occur: 3 },
			{ company: "American Express", num_occur: 3 },
			{ company: "Grab", num_occur: 2 }
		],
		"maximum-product-of-two-elements-in-an-array": [
			{ company: "Yahoo", num_occur: 2 },
			{ company: "Facebook", num_occur: 2 },
			{ company: "Samsung", num_occur: 1 }
		],
		"check-if-a-string-contains-all-binary-codes-of-size-k": [{ company: "Google", num_occur: 1 }],
		"make-two-arrays-equal-by-reversing-sub-arrays": [{ company: "Facebook", num_occur: 4 }],
		"pseudo-palindromic-paths-in-a-binary-tree": [{ company: "Bloomberg", num_occur: 2 }],
		"maximum-number-of-vowels-in-a-substring-of-given-length": [{ company: "Amazon", num_occur: 1 }],
		"check-if-a-word-occurs-as-a-prefix-of-any-word-in-a-sentence": [{ company: "Amazon", num_occur: 2 }],
		"people-whose-list-of-favorite-companies-is-not-a-subset-of-another-list": [{ company: "Google", num_occur: 1 }],
		"rearrange-words-in-a-sentence": [
			{ company: "Amazon", num_occur: 2 },
			{ company: "VMware", num_occur: 2 },
			{ company: "Expedia", num_occur: 1 }
		],
		"number-of-students-doing-homework-at-a-given-time": [{ company: "Yandex", num_occur: 2 }],
		"count-good-nodes-in-binary-tree": [
			{ company: "Microsoft", num_occur: 11 },
			{ company: "Salesforce", num_occur: 2 }
		],
		"simplified-fractions": [{ company: "Google", num_occur: 2 }],
		"consecutive-characters": [
			{ company: "Apple", num_occur: 3 },
			{ company: "Google", num_occur: 2 }
		],
		"build-an-array-with-stack-operations": [{ company: "Google", num_occur: 2 }],
		"find-the-kth-smallest-sum-of-a-matrix-with-sorted-rows": [{ company: "Bloomberg", num_occur: 2 }],
		"longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit": [
			{ company: "Uber", num_occur: 14 },
			{ company: "Amazon", num_occur: 12 },
			{ company: "Google", num_occur: 3 }
		],
		"check-if-all-1s-are-at-least-length-k-places-away": [{ company: "United Health Group", num_occur: 1 }],
		"destination-city": [
			{ company: "Yelp", num_occur: 5 },
			{ company: "Google", num_occur: 2 }
		],
		"max-difference-you-can-get-from-changing-an-integer": [{ company: "Mercari", num_occur: 1 }],
		"kids-with-the-greatest-number-of-candies": [{ company: "Amazon", num_occur: 3 }],
		"first-unique-number": [
			{ company: "Amazon", num_occur: 4 },
			{ company: "Facebook", num_occur: 2 }
		],
		"leftmost-column-with-at-least-a-one": [
			{ company: "Facebook", num_occur: 10 },
			{ company: "Uber", num_occur: 10 },
			{ company: "Google", num_occur: 2 }
		],
		"perform-string-shifts": [{ company: "Goldman Sachs", num_occur: 1 }],
		"counting-elements": [{ company: "DRW", num_occur: 1 }],
		"maximum-points-you-can-obtain-from-cards": [
			{ company: "Google", num_occur: 17 },
			{ company: "Amazon", num_occur: 3 },
			{ company: "Adobe", num_occur: 2 }
		],
		"maximum-score-after-splitting-a-string": [{ company: "Google", num_occur: 1 }],
		"display-table-of-food-orders-in-a-restaurant": [{ company: "JP Morgan", num_occur: 1 }],
		"reformat-the-string": [
			{ company: "Google", num_occur: 4 },
			{ company: "Microsoft", num_occur: 1 }
		],
		"the-k-th-lexicographical-string-of-all-happy-strings-of-length-n": [{ company: "Microsoft", num_occur: 1 }],
		"minimum-value-to-get-positive-step-by-step-sum": [
			{ company: "Amazon", num_occur: 2 },
			{ company: "JPMorgan", num_occur: 2 }
		],
		"html-entity-parser": [{ company: "Oracle", num_occur: 1 }],
		"queries-on-a-permutation-with-key": [{ company: "Amazon", num_occur: 1 }],
		"string-matching-in-an-array": [
			{ company: "Amazon", num_occur: 3 },
			{ company: "Bloomberg", num_occur: 2 }
		],
		"minimum-subsequence-in-non-increasing-order": [
			{ company: "Amazon", num_occur: 2 },
			{ company: "Mercari", num_occur: 1 }
		],
		"reducing-dishes": [
			{ company: "American Express", num_occur: 2 },
			{ company: "Sony", num_occur: 2 },
			{ company: "OT", num_occur: 1 }
		],
		"circle-and-rectangle-overlapping": [{ company: "Adobe", num_occur: 2 }],
		"construct-k-palindrome-strings": [{ company: "Uber", num_occur: 7 }],
		"count-largest-group": [{ company: "Mercari", num_occur: 1 }],
		"design-underground-system": [{ company: "Bloomberg", num_occur: 64 }],
		"count-number-of-teams": [
			{ company: "Goldman Sachs", num_occur: 7 },
			{ company: "Amazon", num_occur: 3 },
			{ company: "Facebook", num_occur: 2 }
		],
		"find-lucky-integer-in-an-array": [{ company: "Microsoft", num_occur: 1 }],
		"longest-happy-prefix": [{ company: "Amazon", num_occur: 2 }],
		"four-divisors": [{ company: "Capital One", num_occur: 1 }],
		"create-target-array-in-the-given-order": [
			{ company: "Apple", num_occur: 2 },
			{ company: "Amazon", num_occur: 2 },
			{ company: "Visa", num_occur: 1 }
		],
		"pizza-with-3n-slices": [{ company: "Google", num_occur: 2 }],
		"sort-integers-by-the-power-value": [
			{ company: "Bloomberg", num_occur: 2 },
			{ company: "Qualtrics", num_occur: 2 }
		],
		"cinema-seat-allocation": [
			{ company: "Microsoft", num_occur: 17 },
			{ company: "Amazon", num_occur: 2 }
		],
		"find-the-distance-value-between-two-arrays": [{ company: "Uber", num_occur: 2 }],
		"balance-a-binary-search-tree": [{ company: "Facebook", num_occur: 11 }],
		"design-a-stack-with-increment-operation": [{ company: "tiktok", num_occur: 13 }],
		"lucky-numbers-in-a-matrix": [{ company: "Apple", num_occur: 2 }],
		"find-a-corresponding-node-of-a-binary-tree-in-a-clone-of-that-tree": [{ company: "Amazon", num_occur: 2 }],
		"frog-position-after-t-seconds": [
			{ company: "Google", num_occur: 2 },
			{ company: "Amazon", num_occur: 2 }
		],
		"time-needed-to-inform-all-employees": [
			{ company: "Google", num_occur: 11 },
			{ company: "Amazon", num_occur: 6 }
		],
		"bulb-switcher-iii": [
			{ company: "Grab", num_occur: 4 },
			{ company: "Microsoft", num_occur: 2 }
		],
		"generate-a-string-with-characters-that-have-odd-counts": [{ company: "Microsoft", num_occur: 2 }],
		"maximum-sum-bst-in-binary-tree": [{ company: "Amazon", num_occur: 3 }],
		"longest-zigzag-path-in-a-binary-tree": [{ company: "Amazon", num_occur: 6 }],
		"find-the-longest-substring-containing-vowels-in-even-counts": [{ company: "Microsoft", num_occur: 1 }],
		"increasing-decreasing-string": [
			{ company: "Akuna Capital", num_occur: 8 },
			{ company: "Amazon", num_occur: 2 }
		],
		"linked-list-in-binary-tree": [
			{ company: "Amazon", num_occur: 2 },
			{ company: "Microsoft", num_occur: 2 }
		],
		"rank-teams-by-votes": [
			{ company: "Atlassian", num_occur: 18 },
			{ company: "Google", num_occur: 2 },
			{ company: "Coursera", num_occur: 2 },
			{ company: "Square", num_occur: 2 }
		],
		"how-many-numbers-are-smaller-than-the-current-number": [
			{ company: "Amazon", num_occur: 2 },
			{ company: "Yahoo", num_occur: 2 }
		],
		"closest-divisors": [{ company: "Amazon", num_occur: 1 }],
		"validate-binary-tree-nodes": [{ company: "Facebook", num_occur: 2 }],
		"number-of-days-between-two-dates": [{ company: "Amazon", num_occur: 5 }],
		"number-of-substrings-containing-all-three-characters": [
			{ company: "Microsoft", num_occur: 2 },
			{ company: "Adobe", num_occur: 2 },
			{ company: "DE Shaw", num_occur: 1 }
		],
		"apply-discount-every-n-orders": [{ company: "Facebook", num_occur: 1 }],
		"sort-integers-by-the-number-of-1-bits": [{ company: "Infosys", num_occur: 2 }],
		"construct-target-array-with-multiple-sums": [{ company: "Quora", num_occur: 3 }],
		"maximum-number-of-events-that-can-be-attended": [
			{ company: "Amazon", num_occur: 3 },
			{ company: "Salesforce", num_occur: 2 },
			{ company: "JPMorgan", num_occur: 2 }
		],
		"product-of-the-last-k-numbers": [
			{ company: "Google", num_occur: 7 },
			{ company: "Amazon", num_occur: 3 },
			{ company: "Apple", num_occur: 2 },
			{ company: "Cruise Automation", num_occur: 2 }
		],
		"count-negative-numbers-in-a-sorted-matrix": [{ company: "Facebook", num_occur: 2 }],
		"maximum-students-taking-exam": [{ company: "SAP", num_occur: 1 }],
		"tweet-counts-per-frequency": [{ company: "Twitter", num_occur: 6 }],
		"minimum-number-of-steps-to-make-two-strings-anagram": [
			{ company: "Bloomberg", num_occur: 8 },
			{ company: "DoorDash", num_occur: 7 },
			{ company: "Twitter", num_occur: 2 },
			{ company: "tiktok", num_occur: 2 }
		],
		"check-if-n-and-its-double-exist": [{ company: "Google", num_occur: 2 }],
		"jump-game-iv": [
			{ company: "Google", num_occur: 5 },
			{ company: "Amazon", num_occur: 4 },
			{ company: "tiktok", num_occur: 2 }
		],
		"angle-between-hands-of-a-clock": [
			{ company: "Facebook", num_occur: 11 },
			{ company: "Microsoft", num_occur: 5 },
			{ company: "Amazon", num_occur: 3 },
			{ company: "Oracle", num_occur: 2 }
		],
		"number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold": [
			{ company: "LinkedIn", num_occur: 1 }
		],
		"number-of-steps-to-reduce-a-number-to-zero": [
			{ company: "Microsoft", num_occur: 2 },
			{ company: "Apple", num_occur: 2 },
			{ company: "Grab", num_occur: 2 }
		],
		"the-k-weakest-rows-in-a-matrix": [{ company: "Amazon", num_occur: 1 }],
		"maximum-product-of-splitted-binary-tree": [
			{ company: "Amazon", num_occur: 4 },
			{ company: "Two Sigma", num_occur: 4 }
		],
		"reduce-array-size-to-the-half": [{ company: "Amazon", num_occur: 2 }],
		"remove-palindromic-subsequences": [{ company: "Bloomberg", num_occur: 2 }],
		"filter-restaurants-by-vegan-friendly-price-and-distance": [{ company: "Yelp", num_occur: 1 }],
		"rank-transform-of-an-array": [
			{ company: "Facebook", num_occur: 3 },
			{ company: "Google", num_occur: 2 }
		],
		"sort-the-matrix-diagonally": [{ company: "Microsoft", num_occur: 2 }],
		"delete-leaves-with-a-given-value": [{ company: "Amazon", num_occur: 2 }],
		"print-words-vertically": [
			{ company: "Postmates", num_occur: 2 },
			{ company: "Microsoft", num_occur: 1 }
		],
		"maximum-69-number": [{ company: "HRT", num_occur: 1 }],
		"convert-integer-to-the-sum-of-two-no-zero-integers": [{ company: "HRT", num_occur: 1 }],
		"sum-of-nodes-with-even-valued-grandparent": [{ company: "Amazon", num_occur: 2 }],
		"matrix-block-sum": [{ company: "Amazon", num_occur: 2 }],
		"decompress-run-length-encoded-list": [
			{ company: "Apple", num_occur: 3 },
			{ company: "Amazon", num_occur: 2 }
		],
		"all-elements-in-two-binary-search-trees": [
			{ company: "Facebook", num_occur: 5 },
			{ company: "Amazon", num_occur: 2 },
			{ company: "Google", num_occur: 2 },
			{ company: "Bloomberg", num_occur: 2 }
		],
		"find-n-unique-integers-sum-up-to-zero": [{ company: "Microsoft", num_occur: 22 }],
		"deepest-leaves-sum": [{ company: "Apple", num_occur: 2 }],
		"sum-of-mutated-array-closest-to-target": [{ company: "Bloomberg", num_occur: 2 }],
		"replace-elements-with-greatest-element-on-right-side": [{ company: "Facebook", num_occur: 2 }],
		"maximum-number-of-occurrences-of-a-substring": [{ company: "Amazon", num_occur: 2 }],
		"divide-array-in-sets-of-k-consecutive-numbers": [{ company: "Google", num_occur: 4 }],
		"find-numbers-with-even-number-of-digits": [{ company: "Amazon", num_occur: 2 }],
		"sequential-digits": [
			{ company: "Amazon", num_occur: 3 },
			{ company: "Apple", num_occur: 2 }
		],
		"convert-binary-number-in-a-linked-list-to-integer": [
			{ company: "Amazon", num_occur: 2 },
			{ company: "Oracle", num_occur: 2 }
		],
		"minimum-falling-path-sum-ii": [
			{ company: "Roblox", num_occur: 4 },
			{ company: "Google", num_occur: 1 }
		],
		"element-appearing-more-than-25-in-sorted-array": [
			{ company: "Facebook", num_occur: 5 },
			{ company: "Google", num_occur: 2 }
		],
		"iterator-for-combination": [{ company: "Uber", num_occur: 2 }],
		"find-the-smallest-divisor-given-a-threshold": [
			{ company: "Salesforce", num_occur: 3 },
			{ company: "Airbnb", num_occur: 2 }
		],
		"group-the-people-given-the-group-size-they-belong-to": [
			{ company: "Apple", num_occur: 2 },
			{ company: "Bloomberg", num_occur: 2 }
		],
		"subtract-the-product-and-sum-of-digits-of-an-integer": [{ company: "Uber", num_occur: 5 }],
		"count-square-submatrices-with-all-ones": [
			{ company: "Google", num_occur: 8 },
			{ company: "Bloomberg", num_occur: 2 }
		],
		"find-winner-on-a-tic-tac-toe-game": [
			{ company: "Amazon", num_occur: 14 },
			{ company: "Google", num_occur: 11 },
			{ company: "Microsoft", num_occur: 10 },
			{ company: "Facebook", num_occur: 4 },
			{ company: "Tesla", num_occur: 2 }
		],
		"delete-tree-nodes": [{ company: "Microsoft", num_occur: 1 }],
		hexspeak: [{ company: "Virtu Financial", num_occur: 2 }],
		"search-suggestions-system": [
			{ company: "Amazon", num_occur: 68 },
			{ company: "Google", num_occur: 3 },
			{ company: "Facebook", num_occur: 3 },
			{ company: "Oracle", num_occur: 3 },
			{ company: "Apple", num_occur: 2 },
			{ company: "Adobe", num_occur: 2 }
		],
		"count-servers-that-communicate": [{ company: "Microsoft", num_occur: 6 }],
		"minimum-time-visiting-all-points": [{ company: "Apple", num_occur: 3 }],
		"find-elements-in-a-contaminated-binary-tree": [{ company: "Google", num_occur: 1 }],
		"shift-2d-grid": [{ company: "Bloomberg", num_occur: 2 }],
		"synonymous-sentences": [
			{ company: "Cruise Automation", num_occur: 3 },
			{ company: "Amazon", num_occur: 3 }
		],
		"smallest-common-region": [{ company: "Airbnb", num_occur: 7 }],
		"cells-with-odd-values-in-a-matrix": [{ company: "Google", num_occur: 2 }],
		"minimum-remove-to-make-valid-parentheses": [
			{ company: "Facebook", num_occur: 282 },
			{ company: "Bloomberg", num_occur: 8 },
			{ company: "Amazon", num_occur: 6 },
			{ company: "Microsoft", num_occur: 4 },
			{ company: "Google", num_occur: 2 },
			{ company: "Adobe", num_occur: 2 },
			{ company: "Snapchat", num_occur: 2 }
		],
		"array-transformation": [{ company: "Virtu Financial", num_occur: 2 }],
		"find-positive-integer-solution-for-a-given-equation": [{ company: "Google", num_occur: 2 }],
		"check-if-it-is-a-straight-line": [
			{ company: "Microsoft", num_occur: 2 },
			{ company: "Palantir Technologies", num_occur: 1 }
		],
		"missing-number-in-arithmetic-progression": [{ company: "VMware", num_occur: 2 }],
		"split-a-string-in-balanced-strings": [
			{ company: "Amazon", num_occur: 2 },
			{ company: "Bloomberg", num_occur: 2 },
			{ company: "Walmart Global Tech", num_occur: 2 },
			{ company: "Adobe", num_occur: 2 }
		],
		"path-with-maximum-gold": [{ company: "tiktok", num_occur: 2 }],
		"play-with-chips": [{ company: "Bloomberg", num_occur: 2 }],
		"two-sum-bsts": [{ company: "Amazon", num_occur: 3 }],
		"intersection-of-three-sorted-arrays": [{ company: "Facebook", num_occur: 3 }],
		"remove-all-adjacent-duplicates-in-string-ii": [
			{ company: "Bloomberg", num_occur: 26 },
			{ company: "Amazon", num_occur: 8 },
			{ company: "Facebook", num_occur: 7 },
			{ company: "Apple", num_occur: 3 },
			{ company: "Goldman Sachs", num_occur: 2 },
			{ company: "Microsoft", num_occur: 2 },
			{ company: "Spotify", num_occur: 2 },
			{ company: "Visa", num_occur: 2 }
		],
		"unique-number-of-occurrences": [
			{ company: "Amazon", num_occur: 5 },
			{ company: "Adobe", num_occur: 5 },
			{ company: "Facebook", num_occur: 4 },
			{ company: "Apple", num_occur: 4 },
			{ company: "Bloomberg", num_occur: 3 },
			{ company: "Google", num_occur: 2 }
		],
		"minimum-absolute-difference": [
			{ company: "Salesforce", num_occur: 3 },
			{ company: "Google", num_occur: 2 },
			{ company: "JPMorgan", num_occur: 2 }
		],
		"find-smallest-common-element-in-all-rows": [{ company: "Walmart Global Tech", num_occur: 2 }],
		"how-many-apples-can-you-put-into-the-basket": [{ company: "Virtu Financial", num_occur: 2 }],
		"reverse-substrings-between-each-pair-of-parentheses": [
			{ company: "Microsoft", num_occur: 2 },
			{ company: "Paypal", num_occur: 2 }
		],
		"maximum-number-of-balloons": [{ company: "Adobe", num_occur: 2 }],
		"day-of-the-week": [
			{ company: "Apple", num_occur: 2 },
			{ company: "United Health Group", num_occur: 1 }
		],
		"distance-between-bus-stops": [{ company: "Google", num_occur: 1 }],
		"shortest-distance-to-target-color": [{ company: "Uber", num_occur: 2 }],
		"count-substrings-with-only-one-distinct-letter": [{ company: "Virtu Financial", num_occur: 2 }],
		"diet-plan-performance": [{ company: "Amazon", num_occur: 1 }],
		"prime-arrangements": [{ company: "Amazon", num_occur: 2 }],
		"remove-zero-sum-consecutive-nodes-from-linked-list": [{ company: "Amazon", num_occur: 2 }],
		"single-row-keyboard": [{ company: "Google", num_occur: 1 }],
		"maximum-level-sum-of-a-binary-tree": [{ company: "Facebook", num_occur: 3 }],
		"find-words-that-can-be-formed-by-characters": [
			{ company: "Karat", num_occur: 12 },
			{ company: "Indeed", num_occur: 6 },
			{ company: "Amazon", num_occur: 2 },
			{ company: "Google", num_occur: 2 }
		],
		"day-of-the-year": [{ company: "ZScaler", num_occur: 1 }],
		"analyze-user-website-visit-pattern": [
			{ company: "Amazon", num_occur: 50 },
			{ company: "Spotify", num_occur: 6 }
		],
		"minimum-swaps-to-group-all-1s-together": [{ company: "Amazon", num_occur: 21 }],
		"check-if-a-number-is-majority-element-in-a-sorted-array": [
			{ company: "Facebook", num_occur: 2 },
			{ company: "Salesforce", num_occur: 1 }
		],
		"snapshot-array": [
			{ company: "Google", num_occur: 36 },
			{ company: "Rubrik", num_occur: 5 },
			{ company: "Microsoft", num_occur: 2 }
		],
		"longest-common-subsequence": [
			{ company: "Amazon", num_occur: 6 },
			{ company: "DoorDash", num_occur: 5 },
			{ company: "Bloomberg", num_occur: 3 },
			{ company: "Karat", num_occur: 2 }
		],
		"alphabet-board-path": [{ company: "Amazon", num_occur: 2 }],
		"n-th-tribonacci-number": [{ company: "Amazon", num_occur: 3 }],
		"parallel-courses": [{ company: "Amazon", num_occur: 2 }],
		"armstrong-number": [{ company: "Amazon", num_occur: 1 }],
		"largest-unique-number": [{ company: "Amazon", num_occur: 1 }],
		"number-of-equivalent-domino-pairs": [
			{ company: "Adobe", num_occur: 2 },
			{ company: "Amazon", num_occur: 1 }
		],
		"relative-sort-array": [{ company: "Google", num_occur: 2 }],
		"compare-strings-by-frequency-of-the-smallest-character": [{ company: "Google", num_occur: 2 }],
		"remove-vowels-from-a-string": [{ company: "Amazon", num_occur: 3 }],
		"number-of-days-in-a-month": [{ company: "Amazon", num_occur: 1 }],
		"print-in-order": [{ company: "Google", num_occur: 2 }],
		"delete-nodes-and-return-forest": [
			{ company: "Facebook", num_occur: 7 },
			{ company: "Google", num_occur: 6 },
			{ company: "Microsoft", num_occur: 2 },
			{ company: "Intuit", num_occur: 2 }
		],
		"defanging-an-ip-address": [
			{ company: "Google", num_occur: 2 },
			{ company: "Amazon", num_occur: 2 }
		],
		"distribute-candies-to-people": [{ company: "PayTM", num_occur: 2 }],
		"find-k-length-substrings-with-no-repeated-characters": [{ company: "Amazon", num_occur: 4 }],
		"two-sum-less-than-k": [
			{ company: "Amazon", num_occur: 3 },
			{ company: "Facebook", num_occur: 3 }
		],
		"car-pooling": [
			{ company: "Amazon", num_occur: 9 },
			{ company: "DoorDash", num_occur: 4 },
			{ company: "Flipkart", num_occur: 4 },
			{ company: "Google", num_occur: 3 },
			{ company: "Microsoft", num_occur: 3 },
			{ company: "Bloomberg", num_occur: 3 },
			{ company: "Facebook", num_occur: 2 },
			{ company: "Cruise Automation", num_occur: 2 }
		],
		"largest-values-from-labels": [{ company: "Google", num_occur: 1 }],
		"shortest-path-in-binary-matrix": [
			{ company: "Facebook", num_occur: 76 },
			{ company: "Amazon", num_occur: 9 },
			{ company: "Microsoft", num_occur: 8 },
			{ company: "Google", num_occur: 5 },
			{ company: "Snapchat", num_occur: 3 },
			{ company: "Adobe", num_occur: 2 }
		],
		"brace-expansion": [
			{ company: "Google", num_occur: 4 },
			{ company: "Amazon", num_occur: 2 }
		],
		"high-five": [{ company: "Goldman Sachs", num_occur: 12 }],
		"sum-of-digits-in-the-minimum-number": [{ company: "Amazon", num_occur: 1 }],
		"letter-tile-possibilities": [
			{ company: "Microsoft", num_occur: 3 },
			{ company: "Google", num_occur: 1 }
		],
		"occurrences-after-bigram": [{ company: "Google", num_occur: 1 }],
		"greatest-common-divisor-of-strings": [
			{ company: "Goldman Sachs", num_occur: 3 },
			{ company: "Atlassian", num_occur: 2 }
		],
		"campus-bikes-ii": [
			{ company: "Google", num_occur: 2 },
			{ company: "Amazon", num_occur: 2 }
		],
		"index-pairs-of-a-string": [{ company: "Amazon", num_occur: 1 }],
		"longest-repeating-substring": [{ company: "VMware", num_occur: 2 }],
		"campus-bikes": [{ company: "Amazon", num_occur: 2 }],
		"confusing-number": [{ company: "Google", num_occur: 2 }],
		"fixed-point": [{ company: "Qualtrics", num_occur: 2 }],
		"height-checker": [
			{ company: "Goldman Sachs", num_occur: 20 },
			{ company: "Apple", num_occur: 2 },
			{ company: "Salesforce", num_occur: 1 }
		],
		"remove-all-adjacent-duplicates-in-string": [
			{ company: "Facebook", num_occur: 40 },
			{ company: "Amazon", num_occur: 4 }
		],
		"last-stone-weight": [
			{ company: "Visa", num_occur: 11 },
			{ company: "Nvidia", num_occur: 8 },
			{ company: "Amazon", num_occur: 4 },
			{ company: "Salesforce", num_occur: 2 }
		],
		"partition-array-for-maximum-sum": [
			{ company: "Amazon", num_occur: 4 },
			{ company: "Adobe", num_occur: 3 }
		],
		"binary-search-tree-to-greater-sum-tree": [
			{ company: "Amazon", num_occur: 2 },
			{ company: "Facebook", num_occur: 2 }
		],
		"valid-boomerang": [{ company: "Google", num_occur: 1 }],
		"moving-stones-until-consecutive": [{ company: "Facebook", num_occur: 1 }],
		"matrix-cells-in-distance-order": [{ company: "Yahoo", num_occur: 1 }],
		"two-city-scheduling": [
			{ company: "Bloomberg", num_occur: 14 },
			{ company: "Facebook", num_occur: 2 }
		],
		"maximum-difference-between-node-and-ancestor": [
			{ company: "Amazon", num_occur: 4 },
			{ company: "Google", num_occur: 2 },
			{ company: "Facebook", num_occur: 2 }
		],
		"divisor-game": [
			{ company: "Google", num_occur: 2 },
			{ company: "Bloomberg", num_occur: 2 }
		],
		"video-stitching": [
			{ company: "Google", num_occur: 2 },
			{ company: "Amazon", num_occur: 2 }
		],
		"sum-of-root-to-leaf-binary-numbers": [
			{ company: "Amazon", num_occur: 2 },
			{ company: "Apple", num_occur: 2 },
			{ company: "Yahoo", num_occur: 2 }
		],
		"remove-outermost-parentheses": [{ company: "Microsoft", num_occur: 2 }],
		"number-of-enclaves": [{ company: "Google", num_occur: 1 }],
		"next-greater-node-in-linked-list": [
			{ company: "Amazon", num_occur: 5 },
			{ company: "Bloomberg", num_occur: 2 }
		],
		"best-sightseeing-pair": [{ company: "Google", num_occur: 2 }],
		"pairs-of-songs-with-total-durations-divisible-by-60": [
			{ company: "Amazon", num_occur: 14 },
			{ company: "Citadel", num_occur: 8 },
			{ company: "Bloomberg", num_occur: 3 },
			{ company: "C3 IoT", num_occur: 3 },
			{ company: "Cisco", num_occur: 2 },
			{ company: "ServiceNow", num_occur: 2 },
			{ company: "Oracle", num_occur: 2 },
			{ company: "Apple", num_occur: 2 }
		],
		"complement-of-base-10-integer": [
			{ company: "Adobe", num_occur: 4 },
			{ company: "Apple", num_occur: 2 }
		],
		"construct-binary-search-tree-from-preorder-traversal": [
			{ company: "Amazon", num_occur: 4 },
			{ company: "Microsoft", num_occur: 3 },
			{ company: "Facebook", num_occur: 2 },
			{ company: "Bloomberg", num_occur: 2 }
		],
		"maximize-sum-of-array-after-k-negations": [
			{ company: "Amazon", num_occur: 2 },
			{ company: "Druva", num_occur: 1 }
		],
		"max-consecutive-ones-iii": [
			{ company: "Facebook", num_occur: 26 },
			{ company: "Microsoft", num_occur: 3 },
			{ company: "Google", num_occur: 3 },
			{ company: "Amazon", num_occur: 2 },
			{ company: "ByteDance", num_occur: 2 },
			{ company: "Apple", num_occur: 2 },
			{ company: "Bloomberg", num_occur: 2 }
		],
		"check-if-word-is-valid-after-substitutions": [{ company: "Nutanix", num_occur: 1 }],
		"find-common-characters": [{ company: "Amazon", num_occur: 4 }],
		"available-captures-for-rook": [{ company: "Square", num_occur: 2 }],
		"broken-calculator": [{ company: "Arcesium", num_occur: 2 }],
		"time-based-key-value-store": [
			{ company: "Amazon", num_occur: 9 },
			{ company: "Lyft", num_occur: 7 },
			{ company: "Microsoft", num_occur: 5 },
			{ company: "Google", num_occur: 4 },
			{ company: "Oracle", num_occur: 3 },
			{ company: "tiktok", num_occur: 3 }
		],
		"find-the-town-judge": [
			{ company: "Google", num_occur: 2 },
			{ company: "Amazon", num_occur: 2 },
			{ company: "Apple", num_occur: 2 },
			{ company: "Adobe", num_occur: 2 }
		],
		"rotting-oranges": [
			{ company: "Amazon", num_occur: 35 },
			{ company: "Microsoft", num_occur: 12 },
			{ company: "VMware", num_occur: 4 },
			{ company: "LinkedIn", num_occur: 2 }
		],
		"cousins-in-binary-tree": [
			{ company: "Amazon", num_occur: 3 },
			{ company: "Facebook", num_occur: 2 },
			{ company: "Microsoft", num_occur: 2 }
		],
		"add-to-array-form-of-integer": [{ company: "Facebook", num_occur: 2 }],
		"smallest-string-starting-from-leaf": [{ company: "Apple", num_occur: 2 }],
		"vertical-order-traversal-of-a-binary-tree": [
			{ company: "Facebook", num_occur: 82 },
			{ company: "Amazon", num_occur: 10 },
			{ company: "Bloomberg", num_occur: 7 },
			{ company: "Microsoft", num_occur: 6 },
			{ company: "Uber", num_occur: 2 }
		],
		"sum-of-even-numbers-after-queries": [{ company: "Indeed", num_occur: 1 }],
		"unique-paths-iii": [
			{ company: "Amazon", num_occur: 3 },
			{ company: "Facebook", num_occur: 2 }
		],
		"distribute-coins-in-binary-tree": [
			{ company: "Microsoft", num_occur: 4 },
			{ company: "Amazon", num_occur: 2 },
			{ company: "Apple", num_occur: 2 },
			{ company: "PhonePe", num_occur: 2 }
		],
		"squares-of-a-sorted-array": [
			{ company: "Facebook", num_occur: 29 },
			{ company: "Amazon", num_occur: 13 },
			{ company: "Google", num_occur: 5 },
			{ company: "Microsoft", num_occur: 5 },
			{ company: "Paypal", num_occur: 2 }
		],
		"largest-perimeter-triangle": [{ company: "Tesla", num_occur: 3 }],
		"subarray-sums-divisible-by-k": [
			{ company: "Twilio", num_occur: 3 },
			{ company: "Amazon", num_occur: 3 },
			{ company: "Facebook", num_occur: 3 },
			{ company: "Snapchat", num_occur: 3 }
		],
		"k-closest-points-to-origin": [
			{ company: "Facebook", num_occur: 127 },
			{ company: "Amazon", num_occur: 49 },
			{ company: "Microsoft", num_occur: 6 },
			{ company: "Asana", num_occur: 5 },
			{ company: "Google", num_occur: 3 },
			{ company: "LinkedIn", num_occur: 2 },
			{ company: "Sumologic", num_occur: 2 }
		],
		"powerful-integers": [{ company: "Amazon", num_occur: 2 }],
		"vowel-spellchecker": [{ company: "Thumbtack", num_occur: 1 }],
		"univalued-binary-tree": [{ company: "Google", num_occur: 3 }],
		"n-repeated-element-in-size-2n-array": [{ company: "Akamai", num_occur: 1 }],
		"check-completeness-of-a-binary-tree": [{ company: "Facebook", num_occur: 11 }],
		"prison-cells-after-n-days": [{ company: "SAP", num_occur: 2 }],
		"array-of-doubled-pairs": [{ company: "Google", num_occur: 3 }],
		"verifying-an-alien-dictionary": [
			{ company: "Facebook", num_occur: 21 },
			{ company: "Uber", num_occur: 3 },
			{ company: "Amazon", num_occur: 2 },
			{ company: "LinkedIn", num_occur: 2 }
		],
		"flip-equivalent-binary-trees": [{ company: "Google", num_occur: 2 }],
		"reveal-cards-in-increasing-order": [{ company: "Adobe", num_occur: 2 }],
		"validate-stack-sequences": [
			{ company: "Amazon", num_occur: 4 },
			{ company: "Microsoft", num_occur: 2 },
			{ company: "tiktok", num_occur: 2 }
		],
		"delete-columns-to-make-sorted": [{ company: "Google", num_occur: 1 }],
		"di-string-match": [{ company: "Microsoft", num_occur: 2 }],
		"valid-mountain-array": [{ company: "Amazon", num_occur: 2 }],
		"range-sum-of-bst": [
			{ company: "Facebook", num_occur: 149 },
			{ company: "Amazon", num_occur: 4 },
			{ company: "Apple", num_occur: 3 }
		],
		"knight-dialer": [
			{ company: "Bloomberg", num_occur: 10 },
			{ company: "Facebook", num_occur: 6 },
			{ company: "Amazon", num_occur: 3 },
			{ company: "Twilio", num_occur: 2 },
			{ company: "Microsoft", num_occur: 2 },
			{ company: "Snapchat", num_occur: 2 }
		],
		"number-of-recent-calls": [
			{ company: "Yandex", num_occur: 3 },
			{ company: "Bloomberg", num_occur: 1 }
		],
		"minimum-falling-path-sum": [{ company: "Google", num_occur: 2 }],
		"unique-email-addresses": [{ company: "Intuit", num_occur: 6 }],
		"long-pressed-name": [{ company: "Google", num_occur: 2 }],
		"3sum-with-multiplicity": [
			{ company: "Amazon", num_occur: 2 },
			{ company: "Adobe", num_occur: 2 }
		],
		"sort-array-by-parity-ii": [{ company: "Microsoft", num_occur: 2 }],
		"minimum-add-to-make-parentheses-valid": [
			{ company: "Facebook", num_occur: 100 },
			{ company: "Microsoft", num_occur: 3 },
			{ company: "Amazon", num_occur: 3 },
			{ company: "Twitter", num_occur: 2 }
		],
		"maximum-sum-circular-subarray": [
			{ company: "Amazon", num_occur: 6 },
			{ company: "Google", num_occur: 3 }
		],
		"reverse-only-letters": [{ company: "Amazon", num_occur: 2 }],
		"x-of-a-kind-in-a-deck-of-cards": [{ company: "Google", num_occur: 2 }],
		"sort-an-array": [
			{ company: "Amazon", num_occur: 3 },
			{ company: "Bloomberg", num_occur: 2 }
		],
		"smallest-range-i": [{ company: "Adobe", num_occur: 1 }],
		"online-stock-span": [
			{ company: "Amazon", num_occur: 6 },
			{ company: "Bloomberg", num_occur: 2 },
			{ company: "Adobe", num_occur: 2 }
		],
		"fruit-into-baskets": [{ company: "Amazon", num_occur: 4 }],
		"rle-iterator": [{ company: "Google", num_occur: 3 }],
		"increasing-order-search-tree": [{ company: "Facebook", num_occur: 2 }],
		"monotonic-array": [
			{ company: "Facebook", num_occur: 12 },
			{ company: "Amazon", num_occur: 2 }
		],
		"maximum-frequency-stack": [
			{ company: "Amazon", num_occur: 5 },
			{ company: "Apple", num_occur: 4 },
			{ company: "Microsoft", num_occur: 2 },
			{ company: "LinkedIn", num_occur: 2 },
			{ company: "Facebook", num_occur: 2 },
			{ company: "Adobe", num_occur: 2 },
			{ company: "Twitter", num_occur: 2 },
			{ company: "MindTickle", num_occur: 2 }
		],
		"groups-of-special-equivalent-strings": [{ company: "Facebook", num_occur: 1 }],
		"surface-area-of-3d-shapes": [{ company: "Amazon", num_occur: 2 }],
		"find-and-replace-pattern": [{ company: "Apple", num_occur: 2 }],
		"fair-candy-swap": [
			{ company: "Amazon", num_occur: 2 },
			{ company: "Uber", num_occur: 2 }
		],
		"spiral-matrix-iii": [{ company: "Tesla", num_occur: 2 }],
		"uncommon-words-from-two-sentences": [
			{ company: "Facebook", num_occur: 3 },
			{ company: "Google", num_occur: 2 }
		],
		"boats-to-save-people": [
			{ company: "Salesforce", num_occur: 5 },
			{ company: "Amazon", num_occur: 4 },
			{ company: "Intuit", num_occur: 3 },
			{ company: "Microsoft", num_occur: 2 },
			{ company: "Uber", num_occur: 2 },
			{ company: "Apple", num_occur: 2 },
			{ company: "Bloomberg", num_occur: 2 }
		],
		"decoded-string-at-index": [{ company: "Amazon", num_occur: 2 }],
		"stone-game": [{ company: "Amazon", num_occur: 2 }],
		"middle-of-the-linked-list": [
			{ company: "Amazon", num_occur: 5 },
			{ company: "Adobe", num_occur: 4 },
			{ company: "Facebook", num_occur: 3 },
			{ company: "Google", num_occur: 3 },
			{ company: "Microsoft", num_occur: 2 },
			{ company: "Apple", num_occur: 2 },
			{ company: "Qualcomm", num_occur: 2 }
		],
		"leaf-similar-trees": [{ company: "Google", num_occur: 2 }],
		"advantage-shuffle": [{ company: "Facebook", num_occur: 2 }],
		"binary-gap": [{ company: "Twitter", num_occur: 1 }],
		"transpose-matrix": [
			{ company: "Apple", num_occur: 3 },
			{ company: "Amazon", num_occur: 2 },
			{ company: "Microsoft", num_occur: 2 },
			{ company: "Citadel", num_occur: 2 }
		],
		"score-after-flipping-matrix": [
			{ company: "Amazon", num_occur: 2 },
			{ company: "IIT Bombay", num_occur: 1 }
		],
		"lemonade-change": [
			{ company: "Atlassian", num_occur: 4 },
			{ company: "Amazon", num_occur: 3 },
			{ company: "Apple", num_occur: 2 }
		],
		"buddy-strings": [
			{ company: "DoorDash", num_occur: 13 },
			{ company: "Facebook", num_occur: 2 }
		],
		"score-of-parentheses": [
			{ company: "Amazon", num_occur: 4 },
			{ company: "Facebook", num_occur: 4 },
			{ company: "Bloomberg", num_occur: 3 },
			{ company: "Infosys", num_occur: 2 },
			{ company: "tiktok", num_occur: 2 }
		],
		"peak-index-in-a-mountain-array": [
			{ company: "Amazon", num_occur: 10 },
			{ company: "Bloomberg", num_occur: 3 },
			{ company: "Apple", num_occur: 3 },
			{ company: "Google", num_occur: 2 }
		],
		"maximize-distance-to-closest-person": [
			{ company: "Yandex", num_occur: 8 },
			{ company: "Microsoft", num_occur: 5 },
			{ company: "Google", num_occur: 3 },
			{ company: "Amazon", num_occur: 3 }
		],
		"shifting-letters": [{ company: "Oracle", num_occur: 2 }],
		"backspace-string-compare": [
			{ company: "IBM", num_occur: 6 },
			{ company: "Google", num_occur: 3 },
			{ company: "Booking.com", num_occur: 3 },
			{ company: "Apple", num_occur: 3 },
			{ company: "Visa", num_occur: 3 },
			{ company: "Bloomberg", num_occur: 2 },
			{ company: "tiktok", num_occur: 2 }
		],
		"keys-and-rooms": [
			{ company: "Amazon", num_occur: 6 },
			{ company: "Hotstar", num_occur: 2 }
		],
		"magic-squares-in-grid": [{ company: "Google", num_occur: 3 }],
		"push-dominoes": [{ company: "Bloomberg", num_occur: 2 }],
		"rectangle-overlap": [
			{ company: "ServiceNow", num_occur: 2 },
			{ company: "Facebook", num_occur: 2 },
			{ company: "Docusign", num_occur: 2 }
		],
		"flipping-an-image": [{ company: "Google", num_occur: 3 }],
		"positions-of-large-groups": [{ company: "Google", num_occur: 3 }],
		"goat-latin": [{ company: "Facebook", num_occur: 5 }],
		"binary-trees-with-factors": [{ company: "Amazon", num_occur: 2 }],
		"shortest-distance-to-a-character": [
			{ company: "Bloomberg", num_occur: 2 },
			{ company: "Apple", num_occur: 2 }
		],
		"short-encoding-of-words": [
			{ company: "Amazon", num_occur: 2 },
			{ company: "HBO", num_occur: 2 }
		],
		"most-common-word": [{ company: "Amazon", num_occur: 2 }],
		"ambiguous-coordinates": [{ company: "Google", num_occur: 1 }],
		"binary-tree-pruning": [
			{ company: "Facebook", num_occur: 4 },
			{ company: "Apple", num_occur: 2 }
		],
		"largest-triangle-area": [{ company: "Google", num_occur: 1 }],
		"subdomain-visit-count": [
			{ company: "Karat", num_occur: 40 },
			{ company: "Indeed", num_occur: 25 },
			{ company: "Wayfair", num_occur: 9 },
			{ company: "Intuit", num_occur: 2 },
			{ company: "Walmart Global Tech", num_occur: 2 }
		],
		"expressive-words": [
			{ company: "Cisco", num_occur: 11 },
			{ company: "Google", num_occur: 3 },
			{ company: "Facebook", num_occur: 2 }
		],
		"max-increase-to-keep-city-skyline": [
			{ company: "Google", num_occur: 3 },
			{ company: "Amazon", num_occur: 2 }
		],
		"unique-morse-code-words": [{ company: "Square", num_occur: 2 }],
		"similar-rgb-color": [{ company: "Google", num_occur: 1 }],
		"champagne-tower": [
			{ company: "Uber", num_occur: 2 },
			{ company: "Amazon", num_occur: 2 },
			{ company: "Adobe", num_occur: 2 }
		],
		"rotate-string": [
			{ company: "Zoom", num_occur: 4 },
			{ company: "Goldman Sachs", num_occur: 3 },
			{ company: "Apple", num_occur: 2 },
			{ company: "LinkedIn", num_occur: 2 },
			{ company: "Microsoft", num_occur: 2 }
		],
		"number-of-matching-subsequences": [
			{ company: "Google", num_occur: 15 },
			{ company: "Roblox", num_occur: 2 }
		],
		"custom-sort-string": [
			{ company: "Facebook", num_occur: 67 },
			{ company: "tiktok", num_occur: 2 }
		],
		"escape-the-ghosts": [{ company: "Google", num_occur: 1 }],
		"rotated-digits": [
			{ company: "Facebook", num_occur: 4 },
			{ company: "Google", num_occur: 2 }
		],
		"letter-case-permutation": [{ company: "Microsoft", num_occur: 2 }],
		"minimum-distance-between-bst-nodes": [
			{ company: "Bloomberg", num_occur: 2 },
			{ company: "Microsoft", num_occur: 2 }
		],
		"rabbits-in-forest": [
			{ company: "Adobe", num_occur: 2 },
			{ company: "Swiggy", num_occur: 2 },
			{ company: "Amazon", num_occur: 2 }
		],
		"k-th-symbol-in-grammar": [{ company: "Adobe", num_occur: 2 }],
		"split-bst": [{ company: "Google", num_occur: 3 }],
		"global-and-local-inversions": [{ company: "Google", num_occur: 2 }],
		"jewels-and-stones": [
			{ company: "Amazon", num_occur: 3 },
			{ company: "Adobe", num_occur: 2 },
			{ company: "Google", num_occur: 2 }
		],
		"max-chunks-to-make-sorted": [
			{ company: "Wayfair", num_occur: 2 },
			{ company: "Amazon", num_occur: 2 }
		],
		"reorganize-string": [
			{ company: "Amazon", num_occur: 17 },
			{ company: "Facebook", num_occur: 9 },
			{ company: "Google", num_occur: 4 },
			{ company: "eBay", num_occur: 3 },
			{ company: "Uber", num_occur: 2 },
			{ company: "Oracle", num_occur: 2 }
		],
		"toeplitz-matrix": [
			{ company: "Facebook", num_occur: 30 },
			{ company: "Bloomberg", num_occur: 3 }
		],
		"couples-holding-hands": [{ company: "Bloomberg", num_occur: 2 }],
		"largest-plus-sign": [{ company: "Uber", num_occur: 3 }],
		"partition-labels": [
			{ company: "Amazon", num_occur: 4 },
			{ company: "Google", num_occur: 2 }
		],
		"prime-number-of-set-bits-in-binary-representation": [{ company: "Amazon", num_occur: 1 }],
		"find-anagram-mappings": [{ company: "Google", num_occur: 1 }],
		"bold-words-in-string": [{ company: "Google", num_occur: 2 }],
		"set-intersection-size-at-least-two": [
			{ company: "Uber", num_occur: 7 },
			{ company: "Drawbridge", num_occur: 1 }
		],
		"pyramid-transition-matrix": [
			{ company: "Google", num_occur: 2 },
			{ company: "Amazon", num_occur: 2 },
			{ company: "Airbnb", num_occur: 1 }
		],
		"pour-water": [{ company: "Airbnb", num_occur: 6 }],
		"reach-a-number": [{ company: "Amazon", num_occur: 5 }],
		"number-of-corner-rectangles": [{ company: "Facebook", num_occur: 1 }],
		"shortest-completing-word": [{ company: "Google", num_occur: 2 }],
		"min-cost-climbing-stairs": [
			{ company: "Amazon", num_occur: 5 },
			{ company: "Adobe", num_occur: 4 },
			{ company: "Bloomberg", num_occur: 2 }
		],
		"find-smallest-letter-greater-than-target": [
			{ company: "LinkedIn", num_occur: 4 },
			{ company: "Amazon", num_occur: 2 },
			{ company: "Bloomberg", num_occur: 2 }
		],
		"network-delay-time": [
			{ company: "Google", num_occur: 8 },
			{ company: "Amazon", num_occur: 3 }
		],
		"closest-leaf-in-a-binary-tree": [{ company: "Facebook", num_occur: 3 }],
		"delete-and-earn": [
			{ company: "Goldman Sachs", num_occur: 11 },
			{ company: "Amazon", num_occur: 5 },
			{ company: "Google", num_occur: 2 }
		],
		"daily-temperatures": [
			{ company: "Facebook", num_occur: 17 },
			{ company: "Amazon", num_occur: 10 },
			{ company: "Microsoft", num_occur: 5 },
			{ company: "C3 IoT", num_occur: 3 },
			{ company: "Uber", num_occur: 2 },
			{ company: "Salesforce", num_occur: 2 }
		],
		"monotone-increasing-digits": [
			{ company: "SAP", num_occur: 9 },
			{ company: "Microsoft", num_occur: 2 },
			{ company: "Amazon", num_occur: 1 }
		],
		"sentence-similarity-ii": [{ company: "Amazon", num_occur: 2 }],
		"asteroid-collision": [
			{ company: "Amazon", num_occur: 14 },
			{ company: "Facebook", num_occur: 10 },
			{ company: "DoorDash", num_occur: 7 },
			{ company: "tiktok", num_occur: 5 },
			{ company: "Lyft", num_occur: 4 },
			{ company: "Microsoft", num_occur: 4 },
			{ company: "Oracle", num_occur: 3 },
			{ company: "Hotstar", num_occur: 3 },
			{ company: "Goldman Sachs", num_occur: 3 }
		],
		"sentence-similarity": [
			{ company: "Facebook", num_occur: 2 },
			{ company: "Google", num_occur: 1 }
		],
		"my-calendar-i": [
			{ company: "Amazon", num_occur: 4 },
			{ company: "Uber", num_occur: 4 },
			{ company: "Google", num_occur: 3 }
		],
		"self-dividing-numbers": [
			{ company: "Adobe", num_occur: 2 },
			{ company: "Bloomberg", num_occur: 2 },
			{ company: "Amazon", num_occur: 2 },
			{ company: "Epic Systems", num_occur: 1 }
		],
		"minimum-window-subsequence": [{ company: "Google", num_occur: 2 }],
		"split-linked-list-in-parts": [
			{ company: "Amazon", num_occur: 2 },
			{ company: "Oracle", num_occur: 2 },
			{ company: "Apple", num_occur: 2 }
		],
		"find-pivot-index": [
			{ company: "Facebook", num_occur: 14 },
			{ company: "Goldman Sachs", num_occur: 9 },
			{ company: "Apple", num_occur: 3 },
			{ company: "Amazon", num_occur: 3 },
			{ company: "Google", num_occur: 2 },
			{ company: "Microsoft", num_occur: 2 },
			{ company: "Cisco", num_occur: 2 },
			{ company: "Expedia", num_occur: 2 },
			{ company: "Adobe", num_occur: 2 }
		],
		"candy-crush": [
			{ company: "Bloomberg", num_occur: 7 },
			{ company: "Capital One", num_occur: 3 },
			{ company: "Facebook", num_occur: 2 },
			{ company: "eBay", num_occur: 2 }
		],
		"accounts-merge": [
			{ company: "Facebook", num_occur: 34 },
			{ company: "Apple", num_occur: 4 },
			{ company: "Google", num_occur: 3 },
			{ company: "Twitter", num_occur: 3 },
			{ company: "Amazon", num_occur: 2 },
			{ company: "LinkedIn", num_occur: 2 },
			{ company: "Pinterest", num_occur: 2 }
		],
		"longest-word-in-dictionary": [{ company: "Google", num_occur: 6 }],
		"find-k-th-smallest-pair-distance": [{ company: "Facebook", num_occur: 3 }],
		"maximum-length-of-repeated-subarray": [
			{ company: "Karat", num_occur: 16 },
			{ company: "Indeed", num_occur: 8 },
			{ company: "Wayfair", num_occur: 7 }
		],
		"1-bit-and-2-bit-characters": [{ company: "Apple", num_occur: 2 }],
		"max-stack": [
			{ company: "LinkedIn", num_occur: 33 },
			{ company: "Microsoft", num_occur: 3 },
			{ company: "Facebook", num_occur: 3 },
			{ company: "Amazon", num_occur: 3 },
			{ company: "VMware", num_occur: 3 },
			{ company: "Yandex", num_occur: 3 },
			{ company: "Lyft", num_occur: 2 }
		],
		"best-time-to-buy-and-sell-stock-with-transaction-fee": [
			{ company: "Amazon", num_occur: 3 },
			{ company: "Facebook", num_occur: 2 }
		],
		"subarray-product-less-than-k": [
			{ company: "Facebook", num_occur: 3 },
			{ company: "Amazon", num_occur: 3 },
			{ company: "Goldman Sachs", num_occur: 2 }
		],
		"minimum-ascii-delete-sum-for-two-strings": [
			{ company: "TripleByte", num_occur: 4 },
			{ company: "Activision", num_occur: 2 }
		],
		"to-lower-case": [{ company: "Amazon", num_occur: 2 }],
		"design-hashmap": [
			{ company: "Amazon", num_occur: 10 },
			{ company: "Microsoft", num_occur: 6 },
			{ company: "LinkedIn", num_occur: 5 },
			{ company: "Oracle", num_occur: 4 },
			{ company: "Salesforce", num_occur: 3 },
			{ company: "Apple", num_occur: 3 },
			{ company: "Goldman Sachs", num_occur: 3 },
			{ company: "Walmart Global Tech", num_occur: 3 }
		],
		"design-hashset": [
			{ company: "Amazon", num_occur: 3 },
			{ company: "Microsoft", num_occur: 2 }
		],
		"binary-search": [
			{ company: "Amazon", num_occur: 13 },
			{ company: "Apple", num_occur: 5 },
			{ company: "Google", num_occur: 4 },
			{ company: "Microsoft", num_occur: 4 },
			{ company: "Bloomberg", num_occur: 3 },
			{ company: "Adobe", num_occur: 3 },
			{ company: "Facebook", num_occur: 2 },
			{ company: "Uber", num_occur: 2 },
			{ company: "Yahoo", num_occur: 2 }
		],
		"kth-largest-element-in-a-stream": [
			{ company: "Amazon", num_occur: 4 },
			{ company: "Google", num_occur: 4 },
			{ company: "Adobe", num_occur: 4 },
			{ company: "Facebook", num_occur: 3 },
			{ company: "LinkedIn", num_occur: 2 }
		],
		"insert-into-a-binary-search-tree": [
			{ company: "LinkedIn", num_occur: 3 },
			{ company: "Amazon", num_occur: 2 },
			{ company: "Goldman Sachs", num_occur: 2 }
		],
		"search-in-a-binary-search-tree": [{ company: "Amazon", num_occur: 2 }],
		"partition-to-k-equal-sum-subsets": [
			{ company: "LinkedIn", num_occur: 10 },
			{ company: "Google", num_occur: 2 },
			{ company: "Amazon", num_occur: 2 }
		],
		"degree-of-an-array": [
			{ company: "Expedia", num_occur: 5 },
			{ company: "Athenahealth", num_occur: 4 },
			{ company: "Walmart Global Tech", num_occur: 3 },
			{ company: "Mathworks", num_occur: 3 },
			{ company: "IBM", num_occur: 3 },
			{ company: "Adobe", num_occur: 2 },
			{ company: "Nvidia", num_occur: 2 }
		],
		"max-area-of-island": [
			{ company: "Amazon", num_occur: 19 },
			{ company: "Facebook", num_occur: 18 },
			{ company: "Microsoft", num_occur: 10 },
			{ company: "Google", num_occur: 9 },
			{ company: "Qualtrics", num_occur: 4 },
			{ company: "LinkedIn", num_occur: 3 },
			{ company: "Apple", num_occur: 3 },
			{ company: "Dropbox", num_occur: 2 },
			{ company: "Oracle", num_occur: 2 }
		],
		"number-of-distinct-islands": [
			{ company: "Amazon", num_occur: 8 },
			{ company: "Microsoft", num_occur: 4 },
			{ company: "Bloomberg", num_occur: 2 },
			{ company: "DoorDash", num_occur: 2 }
		],
		"binary-number-with-alternating-bits": [{ company: "Yahoo", num_occur: 1 }],
		"top-k-frequent-words": [
			{ company: "Uber", num_occur: 17 },
			{ company: "Amazon", num_occur: 12 },
			{ company: "Microsoft", num_occur: 8 },
			{ company: "Google", num_occur: 7 },
			{ company: "Bloomberg", num_occur: 4 },
			{ company: "Facebook", num_occur: 4 },
			{ company: "Yahoo", num_occur: 4 },
			{ company: "Apple", num_occur: 3 },
			{ company: "Two Sigma", num_occur: 2 }
		],
		"stickers-to-spell-word": [{ company: "Facebook", num_occur: 3 }],
		"employee-importance": [
			{ company: "Google", num_occur: 6 },
			{ company: "Apple", num_occur: 2 }
		],
		"maximum-sum-of-3-non-overlapping-subarrays": [{ company: "Facebook", num_occur: 3 }],
		"knight-probability-in-chessboard": [{ company: "Amazon", num_occur: 3 }],
		"longest-univalue-path": [
			{ company: "Amazon", num_occur: 2 },
			{ company: "Microsoft", num_occur: 2 }
		],
		"repeated-string-match": [{ company: "Google", num_occur: 2 }],
		"redundant-connection-ii": [{ company: "Amazon", num_occur: 2 }],
		"redundant-connection": [
			{ company: "Google", num_occur: 2 },
			{ company: "Microsoft", num_occur: 2 }
		],
		"k-empty-slots": [
			{ company: "Nvidia", num_occur: 2 },
			{ company: "Google", num_occur: 1 }
		],
		"baseball-game": [{ company: "Uber", num_occur: 2 }],
		"valid-palindrome-ii": [
			{ company: "Facebook", num_occur: 252 },
			{ company: "Amazon", num_occur: 5 },
			{ company: "Microsoft", num_occur: 3 },
			{ company: "Apple", num_occur: 3 },
			{ company: "Bloomberg", num_occur: 2 },
			{ company: "Oracle", num_occur: 2 },
			{ company: "Walmart Global Tech", num_occur: 2 }
		],
		"24-game": [
			{ company: "HRT", num_occur: 3 },
			{ company: "Google", num_occur: 2 }
		],
		"valid-parenthesis-string": [
			{ company: "LinkedIn", num_occur: 10 },
			{ company: "Amazon", num_occur: 5 },
			{ company: "Facebook", num_occur: 4 },
			{ company: "Google", num_occur: 3 },
			{ company: "Yahoo", num_occur: 3 }
		],
		"map-sum-pairs": [{ company: "Google", num_occur: 2 }],
		"implement-magic-dictionary": [
			{ company: "Facebook", num_occur: 3 },
			{ company: "Google", num_occur: 2 }
		],
		"cut-off-trees-for-golf-event": [
			{ company: "Amazon", num_occur: 3 },
			{ company: "Apple", num_occur: 2 }
		],
		"longest-continuous-increasing-subsequence": [{ company: "Facebook", num_occur: 4 }],
		"number-of-longest-increasing-subsequence": [
			{ company: "Amazon", num_occur: 2 },
			{ company: "Google", num_occur: 2 }
		],
		"bulb-switcher-ii": [{ company: "Microsoft", num_occur: 1 }],
		"second-minimum-node-in-a-binary-tree": [{ company: "LinkedIn", num_occur: 11 }],
		"maximum-swap": [
			{ company: "Facebook", num_occur: 36 },
			{ company: "tiktok", num_occur: 8 },
			{ company: "Amazon", num_occur: 4 },
			{ company: "ByteDance", num_occur: 2 }
		],
		"trim-a-binary-search-tree": [
			{ company: "Amazon", num_occur: 3 },
			{ company: "Facebook", num_occur: 3 },
			{ company: "Microsoft", num_occur: 2 },
			{ company: "Yahoo", num_occur: 2 }
		],
		"kth-smallest-number-in-multiplication-table": [{ company: "Rubrik", num_occur: 4 }],
		"beautiful-arrangement-ii": [{ company: "Google", num_occur: 1 }],
		"path-sum-iv": [
			{ company: "Facebook", num_occur: 2 },
			{ company: "Alibaba", num_occur: 1 }
		],
		"non-decreasing-array": [{ company: "Bloomberg", num_occur: 3 }],
		"strange-printer": [
			{ company: "Walmart Global Tech", num_occur: 4 },
			{ company: "Google", num_occur: 3 }
		],
		"equal-tree-partition": [{ company: "Amazon", num_occur: 2 }],
		"maximum-width-of-binary-tree": [
			{ company: "Amazon", num_occur: 6 },
			{ company: "Google", num_occur: 4 },
			{ company: "Microsoft", num_occur: 3 },
			{ company: "Facebook", num_occur: 3 },
			{ company: "Bloomberg", num_occur: 2 }
		],
		"image-smoother": [{ company: "Microsoft", num_occur: 2 }],
		"remove-9": [{ company: "Google", num_occur: 2 }],
		"split-array-into-consecutive-subsequences": [
			{ company: "Google", num_occur: 2 },
			{ company: "Bloomberg", num_occur: 2 }
		],
		"find-k-closest-elements": [
			{ company: "Facebook", num_occur: 21 },
			{ company: "Google", num_occur: 4 },
			{ company: "tiktok", num_occur: 4 },
			{ company: "Amazon", num_occur: 3 },
			{ company: "Uber", num_occur: 2 },
			{ company: "Bloomberg", num_occur: 2 },
			{ company: "Oracle", num_occur: 2 }
		],
		"coin-path": [{ company: "Google", num_occur: 1 }],
		"print-binary-tree": [
			{ company: "LinkedIn", num_occur: 3 },
			{ company: "Amazon", num_occur: 2 }
		],
		"maximum-binary-tree": [{ company: "Amazon", num_occur: 2 }],
		"two-sum-iv-input-is-a-bst": [
			{ company: "Amazon", num_occur: 2 },
			{ company: "Uber", num_occur: 2 }
		],
		"find-duplicate-subtrees": [
			{ company: "Google", num_occur: 13 },
			{ company: "Amazon", num_occur: 7 },
			{ company: "Bloomberg", num_occur: 2 }
		],
		"4-keys-keyboard": [{ company: "Microsoft", num_occur: 2 }],
		"2-keys-keyboard": [
			{ company: "Amazon", num_occur: 4 },
			{ company: "Microsoft", num_occur: 3 }
		],
		"dota2-senate": [{ company: "Valve", num_occur: 1 }],
		"replace-words": [{ company: "Facebook", num_occur: 2 }],
		"palindromic-substrings": [
			{ company: "Facebook", num_occur: 24 },
			{ company: "Twitter", num_occur: 2 },
			{ company: "Expedia", num_occur: 2 }
		],
		"maximum-length-of-pair-chain": [
			{ company: "Amazon", num_occur: 2 },
			{ company: "Flipkart", num_occur: 2 }
		],
		"set-mismatch": [{ company: "Adobe", num_occur: 3 }],
		"maximum-average-subarray-ii": [{ company: "Google", num_occur: 1 }],
		"maximum-average-subarray-i": [{ company: "Facebook", num_occur: 7 }],
		"design-search-autocomplete-system": [
			{ company: "Google", num_occur: 9 },
			{ company: "Amazon", num_occur: 9 },
			{ company: "Microsoft", num_occur: 4 },
			{ company: "LinkedIn", num_occur: 2 },
			{ company: "Twitter", num_occur: 2 },
			{ company: "Snapchat", num_occur: 2 }
		],
		"solve-the-equation": [
			{ company: "Amazon", num_occur: 4 },
			{ company: "Google", num_occur: 3 }
		],
		"decode-ways-ii": [{ company: "Microsoft", num_occur: 2 }],
		"shopping-offers": [
			{ company: "Google", num_occur: 3 },
			{ company: "Apple", num_occur: 2 },
			{ company: "Facebook", num_occur: 2 },
			{ company: "Amazon", num_occur: 2 }
		],
		"average-of-levels-in-binary-tree": [
			{ company: "Facebook", num_occur: 5 },
			{ company: "Amazon", num_occur: 4 },
			{ company: "Microsoft", num_occur: 2 }
		],
		"exclusive-time-of-functions": [
			{ company: "Facebook", num_occur: 33 },
			{ company: "LinkedIn", num_occur: 8 },
			{ company: "Microsoft", num_occur: 3 },
			{ company: "Google", num_occur: 3 },
			{ company: "DoorDash", num_occur: 2 }
		],
		"design-log-storage-system": [{ company: "Twitter", num_occur: 5 }],
		"find-the-derangement-of-an-array": [
			{ company: "Amazon", num_occur: 2 },
			{ company: "IXL", num_occur: 1 }
		],
		"sum-of-square-numbers": [
			{ company: "Amazon", num_occur: 2 },
			{ company: "Bloomberg", num_occur: 2 }
		],
		"design-excel-sum-formula": [
			{ company: "Google", num_occur: 3 },
			{ company: "Opendoor", num_occur: 3 }
		],
		"course-schedule-iii": [{ company: "Bloomberg", num_occur: 2 }],
		"k-inverse-pairs-array": [
			{ company: "ByteDance", num_occur: 2 },
			{ company: "Works Applications", num_occur: 1 }
		],
		"maximum-product-of-three-numbers": [{ company: "Salesforce", num_occur: 7 }],
		"minimum-factorization": [{ company: "Tencent", num_occur: 1 }],
		"maximum-distance-in-arrays": [{ company: "Yahoo", num_occur: 1 }],
		"add-one-row-to-tree": [{ company: "Gilt Groupe", num_occur: 1 }],
		"design-circular-queue": [
			{ company: "Facebook", num_occur: 4 },
			{ company: "Amazon", num_occur: 4 },
			{ company: "Microsoft", num_occur: 4 },
			{ company: "Airbnb", num_occur: 3 },
			{ company: "Nvidia", num_occur: 3 },
			{ company: "Apple", num_occur: 3 }
		],
		"task-scheduler": [
			{ company: "Facebook", num_occur: 3 },
			{ company: "Amazon", num_occur: 3 },
			{ company: "Uber", num_occur: 2 },
			{ company: "Rubrik", num_occur: 2 },
			{ company: "Microsoft", num_occur: 2 }
		],
		"merge-two-binary-trees": [
			{ company: "Facebook", num_occur: 6 },
			{ company: "Amazon", num_occur: 3 },
			{ company: "Yahoo", num_occur: 3 },
			{ company: "Uber", num_occur: 2 }
		],
		"add-bold-tag-in-string": [{ company: "Facebook", num_occur: 13 }],
		"valid-triangle-number": [
			{ company: "LinkedIn", num_occur: 2 },
			{ company: "Amazon", num_occur: 2 },
			{ company: "Bloomberg", num_occur: 2 }
		],
		"find-duplicate-file-in-system": [
			{ company: "Dropbox", num_occur: 6 },
			{ company: "Apple", num_occur: 2 }
		],
		"construct-string-from-binary-tree": [{ company: "Facebook", num_occur: 2 }],
		"can-place-flowers": [
			{ company: "LinkedIn", num_occur: 21 },
			{ company: "Facebook", num_occur: 13 },
			{ company: "Amazon", num_occur: 3 },
			{ company: "Bloomberg", num_occur: 3 },
			{ company: "Yahoo", num_occur: 2 }
		],
		"design-compressed-string-iterator": [{ company: "Google", num_occur: 2 }],
		"non-negative-integers-without-consecutive-ones": [{ company: "Pocket Gems", num_occur: 1 }],
		"minimum-index-sum-of-two-lists": [
			{ company: "Oracle", num_occur: 2 },
			{ company: "Apple", num_occur: 2 },
			{ company: "Yelp", num_occur: 1 }
		],
		"range-addition-ii": [{ company: "Amazon", num_occur: 2 }],
		"longest-harmonious-subsequence": [{ company: "LiveRamp", num_occur: 1 }],
		"valid-square": [
			{ company: "Google", num_occur: 4 },
			{ company: "Pure Storage", num_occur: 2 },
			{ company: "Microsoft", num_occur: 2 }
		],
		"fraction-addition-and-subtraction": [{ company: "Goldman Sachs", num_occur: 5 }],
		"tag-validator": [
			{ company: "Amazon", num_occur: 2 },
			{ company: "Airbnb", num_occur: 2 }
		],
		"n-ary-tree-postorder-traversal": [{ company: "Amazon", num_occur: 2 }],
		"n-ary-tree-preorder-traversal": [{ company: "Google", num_occur: 3 }],
		"design-in-memory-file-system": [
			{ company: "Amazon", num_occur: 16 },
			{ company: "Microsoft", num_occur: 10 },
			{ company: "DoorDash", num_occur: 4 },
			{ company: "Salesforce", num_occur: 3 },
			{ company: "Google", num_occur: 3 },
			{ company: "Goldman Sachs", num_occur: 2 }
		],
		"erect-the-fence": [{ company: "Google", num_occur: 1 }],
		"delete-operation-for-two-strings": [{ company: "Amazon", num_occur: 2 }],
		"kill-process": [
			{ company: "Amazon", num_occur: 8 },
			{ company: "Microsoft", num_occur: 2 }
		],
		"shortest-unsorted-continuous-subarray": [
			{ company: "Amazon", num_occur: 5 },
			{ company: "Microsoft", num_occur: 3 }
		],
		"out-of-boundary-paths": [
			{ company: "Amazon", num_occur: 3 },
			{ company: "Baidu", num_occur: 1 }
		],
		"distribute-candies": [{ company: "LiveRamp", num_occur: 1 }],
		"squirrel-simulation": [{ company: "Square", num_occur: 1 }],
		"subtree-of-another-tree": [
			{ company: "Amazon", num_occur: 6 },
			{ company: "Facebook", num_occur: 5 },
			{ company: "Microsoft", num_occur: 3 },
			{ company: "Google", num_occur: 2 }
		],
		"maximum-vacation-days": [{ company: "Microsoft", num_occur: 2 }],
		"permutation-in-string": [
			{ company: "Microsoft", num_occur: 5 },
			{ company: "Apple", num_occur: 4 },
			{ company: "Yandex", num_occur: 4 },
			{ company: "Oracle", num_occur: 4 },
			{ company: "Amazon", num_occur: 3 },
			{ company: "Google", num_occur: 2 },
			{ company: "Bloomberg", num_occur: 2 },
			{ company: "ByteDance", num_occur: 2 }
		],
		"reshape-the-matrix": [
			{ company: "Bloomberg", num_occur: 2 },
			{ company: "Facebook", num_occur: 2 }
		],
		"array-nesting": [
			{ company: "Adobe", num_occur: 3 },
			{ company: "Apple", num_occur: 1 }
		],
		"binary-tree-tilt": [{ company: "Indeed", num_occur: 1 }],
		"longest-line-of-consecutive-one-in-matrix": [{ company: "Google", num_occur: 5 }],
		"array-partition-i": [{ company: "Apple", num_occur: 2 }],
		"subarray-sum-equals-k": [
			{ company: "Facebook", num_occur: 141 },
			{ company: "Amazon", num_occur: 19 },
			{ company: "Google", num_occur: 15 },
			{ company: "Microsoft", num_occur: 10 },
			{ company: "Oracle", num_occur: 7 },
			{ company: "tiktok", num_occur: 5 },
			{ company: "Bloomberg", num_occur: 4 },
			{ company: "Visa", num_occur: 4 },
			{ company: "Apple", num_occur: 3 },
			{ company: "Quora", num_occur: 3 },
			{ company: "Adobe", num_occur: 2 },
			{ company: "Expedia", num_occur: 2 },
			{ company: "Nvidia", num_occur: 2 },
			{ company: "ServiceNow", num_occur: 2 },
			{ company: "DoorDash", num_occur: 2 },
			{ company: "Bolt", num_occur: 2 }
		],
		"maximum-depth-of-n-ary-tree": [{ company: "Microsoft", num_occur: 2 }],
		"reverse-words-in-a-string-iii": [
			{ company: "Microsoft", num_occur: 5 },
			{ company: "Amazon", num_occur: 3 },
			{ company: "Bolt", num_occur: 3 },
			{ company: "Yandex", num_occur: 2 },
			{ company: "Facebook", num_occur: 2 },
			{ company: "Apple", num_occur: 2 },
			{ company: "PayTM", num_occur: 2 }
		],
		"split-concatenated-strings": [{ company: "Alibaba", num_occur: 1 }],
		"brick-wall": [
			{ company: "Bloomberg", num_occur: 2 },
			{ company: "Grab", num_occur: 2 }
		],
		"optimal-division": [{ company: "Amazon", num_occur: 1 }],
		"student-attendance-record-ii": [{ company: "Google", num_occur: 14 }],
		"student-attendance-record-i": [{ company: "Google", num_occur: 5 }],
		"binary-tree-longest-consecutive-sequence-ii": [{ company: "Google", num_occur: 4 }],
		"split-array-with-equal-sum": [{ company: "Facebook", num_occur: 3 }],
		"friend-circles": [
			{ company: "Amazon", num_occur: 3 },
			{ company: "Apple", num_occur: 3 },
			{ company: "Bloomberg", num_occur: 2 }
		],
		"remove-boxes": [{ company: "Uber", num_occur: 2 }],
		"boundary-of-binary-tree": [
			{ company: "Amazon", num_occur: 12 },
			{ company: "Microsoft", num_occur: 9 },
			{ company: "Facebook", num_occur: 3 },
			{ company: "Bloomberg", num_occur: 2 }
		],
		"diameter-of-binary-tree": [
			{ company: "Facebook", num_occur: 89 },
			{ company: "Amazon", num_occur: 12 },
			{ company: "Bloomberg", num_occur: 4 },
			{ company: "Google", num_occur: 3 },
			{ company: "Microsoft", num_occur: 3 },
			{ company: "Apple", num_occur: 2 }
		],
		"01-matrix": [
			{ company: "Google", num_occur: 6 },
			{ company: "Amazon", num_occur: 6 },
			{ company: "Facebook", num_occur: 2 },
			{ company: "Adobe", num_occur: 2 }
		],
		"reverse-string-ii": [{ company: "Adobe", num_occur: 3 }],
		"single-element-in-a-sorted-array": [
			{ company: "Amazon", num_occur: 9 },
			{ company: "Facebook", num_occur: 5 },
			{ company: "Microsoft", num_occur: 5 },
			{ company: "Google", num_occur: 3 },
			{ company: "Apple", num_occur: 2 },
			{ company: "Nvidia", num_occur: 2 }
		],
		"minimum-time-difference": [
			{ company: "Google", num_occur: 30 },
			{ company: "Amazon", num_occur: 2 }
		],
		"convert-bst-to-greater-tree": [
			{ company: "Facebook", num_occur: 3 },
			{ company: "Amazon", num_occur: 3 },
			{ company: "Bloomberg", num_occur: 2 }
		],
		"complex-number-multiplication": [{ company: "Amazon", num_occur: 1 }],
		"construct-binary-tree-from-string": [{ company: "Facebook", num_occur: 7 }],
		"encode-and-decode-tinyurl": [
			{ company: "Microsoft", num_occur: 5 },
			{ company: "Amazon", num_occur: 4 },
			{ company: "Bloomberg", num_occur: 2 }
		],
		"lonely-pixel-ii": [{ company: "Google", num_occur: 1 }],
		"k-diff-pairs-in-an-array": [
			{ company: "Bloomberg", num_occur: 2 },
			{ company: "Amazon", num_occur: 2 },
			{ company: "Adobe", num_occur: 2 },
			{ company: "Goldman Sachs", num_occur: 2 },
			{ company: "Apple", num_occur: 2 },
			{ company: "Uber", num_occur: 2 },
			{ company: "DoorDash", num_occur: 2 },
			{ company: "Zoho", num_occur: 2 }
		],
		"lonely-pixel-i": [
			{ company: "Microsoft", num_occur: 3 },
			{ company: "Nvidia", num_occur: 3 },
			{ company: "Google", num_occur: 1 }
		],
		"minimum-absolute-difference-in-bst": [{ company: "Google", num_occur: 3 }],
		minesweeper: [
			{ company: "Uber", num_occur: 7 },
			{ company: "Facebook", num_occur: 6 },
			{ company: "LiveRamp", num_occur: 3 },
			{ company: "Microsoft", num_occur: 2 },
			{ company: "Amazon", num_occur: 2 },
			{ company: "Bloomberg", num_occur: 2 },
			{ company: "Docusign", num_occur: 2 }
		],
		"random-pick-with-weight": [
			{ company: "Facebook", num_occur: 140 },
			{ company: "Google", num_occur: 27 },
			{ company: "Uber", num_occur: 13 },
			{ company: "Amazon", num_occur: 11 },
			{ company: "LinkedIn", num_occur: 8 },
			{ company: "Twitter", num_occur: 2 },
			{ company: "Microsoft", num_occur: 2 },
			{ company: "Apple", num_occur: 2 }
		],
		"word-abbreviation": [
			{ company: "Google", num_occur: 3 },
			{ company: "Snapchat", num_occur: 1 }
		],
		"beautiful-arrangement": [{ company: "Cisco", num_occur: 3 }],
		"contiguous-array": [
			{ company: "Amazon", num_occur: 7 },
			{ company: "Facebook", num_occur: 3 },
			{ company: "Microsoft", num_occur: 2 },
			{ company: "Apple", num_occur: 2 }
		],
		"longest-word-in-dictionary-through-deleting": [{ company: "Google", num_occur: 4 }],
		"continuous-subarray-sum": [
			{ company: "Facebook", num_occur: 56 },
			{ company: "Amazon", num_occur: 5 },
			{ company: "ByteDance", num_occur: 3 },
			{ company: "Google", num_occur: 2 },
			{ company: "Apple", num_occur: 2 },
			{ company: "Walmart Global Tech", num_occur: 2 },
			{ company: "tiktok", num_occur: 2 }
		],
		"longest-uncommon-subsequence-ii": [{ company: "Apple", num_occur: 2 }],
		"longest-uncommon-subsequence-i": [{ company: "Google", num_occur: 1 }],
		"detect-capital": [
			{ company: "Google", num_occur: 2 },
			{ company: "Amazon", num_occur: 2 }
		],
		"coin-change-2": [
			{ company: "Apple", num_occur: 3 },
			{ company: "Goldman Sachs", num_occur: 3 },
			{ company: "Cisco", num_occur: 2 },
			{ company: "Google", num_occur: 2 },
			{ company: "Bloomberg", num_occur: 2 }
		],
		"super-washing-machines": [{ company: "Microsoft", num_occur: 2 }],
		"longest-palindromic-subsequence": [
			{ company: "Amazon", num_occur: 6 },
			{ company: "LinkedIn", num_occur: 5 },
			{ company: "Microsoft", num_occur: 3 },
			{ company: "Apple", num_occur: 2 },
			{ company: "Bloomberg", num_occur: 2 },
			{ company: "Oracle", num_occur: 2 }
		],
		"find-largest-value-in-each-tree-row": [{ company: "Facebook", num_occur: 18 }],
		"freedom-trail": [
			{ company: "DE Shaw", num_occur: 3 },
			{ company: "Google", num_occur: 1 }
		],
		"find-bottom-left-tree-value": [{ company: "Yahoo", num_occur: 2 }],
		"fibonacci-number": [
			{ company: "Amazon", num_occur: 10 },
			{ company: "Microsoft", num_occur: 4 },
			{ company: "Adobe", num_occur: 4 },
			{ company: "Apple", num_occur: 4 },
			{ company: "Facebook", num_occur: 3 },
			{ company: "Oracle", num_occur: 3 },
			{ company: "Goldman Sachs", num_occur: 3 },
			{ company: "Zoom", num_occur: 3 },
			{ company: "Google", num_occur: 2 }
		],
		"most-frequent-subtree-sum": [{ company: "Apple", num_occur: 2 }],
		"perfect-number": [{ company: "Adobe", num_occur: 2 }],
		"relative-ranks": [{ company: "Google", num_occur: 1 }],
		"the-maze-ii": [
			{ company: "Microsoft", num_occur: 2 },
			{ company: "Google", num_occur: 2 },
			{ company: "ByteDance", num_occur: 2 }
		],
		"base-7": [{ company: "Google", num_occur: 3 }],
		ipo: [{ company: "Uber", num_occur: 5 }],
		"keyboard-row": [{ company: "Mathworks", num_occur: 2 }],
		"the-maze-iii": [{ company: "Google", num_occur: 2 }],
		"diagonal-traverse": [
			{ company: "Facebook", num_occur: 48 },
			{ company: "Microsoft", num_occur: 6 },
			{ company: "Google", num_occur: 2 }
		],
		"teemo-attacking": [
			{ company: "Salesforce", num_occur: 2 },
			{ company: "Riot Games", num_occur: 1 }
		],
		"target-sum": [
			{ company: "Facebook", num_occur: 10 },
			{ company: "Amazon", num_occur: 7 },
			{ company: "Google", num_occur: 2 },
			{ company: "Adobe", num_occur: 2 },
			{ company: "Bloomberg", num_occur: 2 }
		],
		"reverse-pairs": [{ company: "Amazon", num_occur: 3 }],
		"construct-the-rectangle": [{ company: "Bloomberg", num_occur: 2 }],
		"increasing-subsequences": [
			{ company: "Google", num_occur: 2 },
			{ company: "Apple", num_occur: 2 },
			{ company: "Yahoo", num_occur: 1 }
		],
		"the-maze": [
			{ company: "ByteDance", num_occur: 4 },
			{ company: "Google", num_occur: 3 },
			{ company: "Snapchat", num_occur: 3 },
			{ company: "Amazon", num_occur: 2 },
			{ company: "Facebook", num_occur: 2 },
			{ company: "Microsoft", num_occur: 2 },
			{ company: "Square", num_occur: 2 }
		],
		"zuma-game": [
			{ company: "Salesforce", num_occur: 6 },
			{ company: "Bloomberg", num_occur: 4 },
			{ company: "Baidu", num_occur: 1 }
		],
		"max-consecutive-ones-ii": [
			{ company: "tiktok", num_occur: 3 },
			{ company: "Microsoft", num_occur: 2 }
		],
		"predict-the-winner": [
			{ company: "Google", num_occur: 2 },
			{ company: "Snapchat", num_occur: 2 }
		],
		"max-consecutive-ones": [
			{ company: "Google", num_occur: 2 },
			{ company: "Apple", num_occur: 2 }
		],
		"find-permutation": [
			{ company: "Goldman Sachs", num_occur: 2 },
			{ company: "Google", num_occur: 1 }
		],
		"smallest-good-base": [{ company: "Microsoft", num_occur: 2 }],
		"license-key-formatting": [
			{ company: "Capital One", num_occur: 18 },
			{ company: "Google", num_occur: 1 }
		],
		"magical-string": [{ company: "Google", num_occur: 1 }],
		"sliding-window-median": [
			{ company: "Facebook", num_occur: 9 },
			{ company: "Spotify", num_occur: 4 },
			{ company: "Microsoft", num_occur: 3 },
			{ company: "HBO", num_occur: 2 }
		],
		"largest-palindrome-product": [{ company: "Yahoo", num_occur: 1 }],
		"total-hamming-distance": [
			{ company: "Adobe", num_occur: 2 },
			{ company: "Amazon", num_occur: 2 }
		],
		"generate-random-point-in-a-circle": [{ company: "Leap Motion", num_occur: 1 }],
		"number-complement": [
			{ company: "Apple", num_occur: 2 },
			{ company: "Amazon", num_occur: 2 }
		],
		heaters: [
			{ company: "Amazon", num_occur: 2 },
			{ company: "Microsoft", num_occur: 2 }
		],
		"ones-and-zeroes": [{ company: "Apple", num_occur: 2 }],
		"matchsticks-to-square": [{ company: "Microsoft", num_occur: 2 }],
		"concatenated-words": [
			{ company: "Amazon", num_occur: 30 },
			{ company: "Microsoft", num_occur: 3 }
		],
		"encode-string-with-shortest-length": [{ company: "Google", num_occur: 2 }],
		"convex-polygon": [{ company: "Google", num_occur: 1 }],
		"validate-ip-address": [
			{ company: "Cisco", num_occur: 8 },
			{ company: "Microsoft", num_occur: 2 },
			{ company: "Amazon", num_occur: 2 }
		],
		"unique-substrings-in-wraparound-string": [
			{ company: "Apple", num_occur: 2 },
			{ company: "MAQ Software", num_occur: 1 }
		],
		"count-the-repetitions": [{ company: "Amazon", num_occur: 3 }],
		"optimal-account-balancing": [
			{ company: "Uber", num_occur: 8 },
			{ company: "Google", num_occur: 4 },
			{ company: "Amazon", num_occur: 2 },
			{ company: "Affirm", num_occur: 2 }
		],
		"can-i-win": [{ company: "LinkedIn", num_occur: 3 }],
		"island-perimeter": [
			{ company: "Facebook", num_occur: 10 },
			{ company: "Google", num_occur: 3 },
			{ company: "Amazon", num_occur: 2 }
		],
		"minimum-moves-to-equal-array-elements-ii": [{ company: "Microsoft", num_occur: 5 }],
		"hamming-distance": [{ company: "Google", num_occur: 2 }],
		"lfu-cache": [
			{ company: "Microsoft", num_occur: 11 },
			{ company: "Amazon", num_occur: 8 },
			{ company: "Google", num_occur: 4 },
			{ company: "Snapchat", num_occur: 3 },
			{ company: "LinkedIn", num_occur: 2 },
			{ company: "Apple", num_occur: 2 },
			{ company: "VMware", num_occur: 2 },
			{ company: "Walmart Global Tech", num_occur: 2 },
			{ company: "Oracle", num_occur: 2 }
		],
		"repeated-substring-pattern": [
			{ company: "Google", num_occur: 2 },
			{ company: "Facebook", num_occur: 2 }
		],
		"circular-array-loop": [{ company: "Goldman Sachs", num_occur: 2 }],
		"132-pattern": [{ company: "Amazon", num_occur: 4 }],
		"assign-cookies": [{ company: "Apple", num_occur: 2 }],
		"4sum-ii": [
			{ company: "Amazon", num_occur: 6 },
			{ company: "Facebook", num_occur: 3 },
			{ company: "Adobe", num_occur: 2 },
			{ company: "Bloomberg", num_occur: 2 }
		],
		"minimum-moves-to-equal-array-elements": [
			{ company: "Goldman Sachs", num_occur: 4 },
			{ company: "Twitter", num_occur: 3 },
			{ company: "Visa", num_occur: 3 },
			{ company: "Mathworks", num_occur: 3 }
		],
		"minimum-number-of-arrows-to-burst-balloons": [
			{ company: "Facebook", num_occur: 2 },
			{ company: "Google", num_occur: 2 },
			{ company: "Goldman Sachs", num_occur: 2 }
		],
		"sort-characters-by-frequency": [
			{ company: "Microsoft", num_occur: 5 },
			{ company: "Facebook", num_occur: 3 },
			{ company: "Amazon", num_occur: 2 },
			{ company: "Bloomberg", num_occur: 2 },
			{ company: "Apple", num_occur: 2 }
		],
		"delete-node-in-a-bst": [
			{ company: "Amazon", num_occur: 8 },
			{ company: "Microsoft", num_occur: 6 },
			{ company: "Oracle", num_occur: 4 },
			{ company: "Google", num_occur: 3 },
			{ company: "LinkedIn", num_occur: 3 }
		],
		"serialize-and-deserialize-bst": [
			{ company: "Amazon", num_occur: 3 },
			{ company: "LinkedIn", num_occur: 2 },
			{ company: "Microsoft", num_occur: 2 }
		],
		"find-all-numbers-disappeared-in-an-array": [
			{ company: "Facebook", num_occur: 7 },
			{ company: "Amazon", num_occur: 5 },
			{ company: "Microsoft", num_occur: 2 },
			{ company: "Apple", num_occur: 2 }
		],
		"number-of-boomerangs": [{ company: "Google", num_occur: 5 }],
		"arithmetic-slices-ii-subsequence": [
			{ company: "Adobe", num_occur: 2 },
			{ company: "Google", num_occur: 2 },
			{ company: "Uber", num_occur: 2 },
			{ company: "Baidu", num_occur: 1 }
		],
		"add-two-numbers-ii": [
			{ company: "Bloomberg", num_occur: 6 },
			{ company: "Microsoft", num_occur: 4 },
			{ company: "Amazon", num_occur: 3 },
			{ company: "Oracle", num_occur: 2 }
		],
		"sequence-reconstruction": [{ company: "Google", num_occur: 2 }],
		"string-compression": [
			{ company: "Expedia", num_occur: 8 },
			{ company: "Amazon", num_occur: 8 },
			{ company: "Microsoft", num_occur: 6 },
			{ company: "Goldman Sachs", num_occur: 6 },
			{ company: "Apple", num_occur: 6 },
			{ company: "Facebook", num_occur: 5 },
			{ company: "Visa", num_occur: 4 },
			{ company: "Yandex", num_occur: 3 },
			{ company: "Redfin", num_occur: 3 }
		],
		"find-all-duplicates-in-an-array": [
			{ company: "Amazon", num_occur: 5 },
			{ company: "Microsoft", num_occur: 4 },
			{ company: "Google", num_occur: 2 },
			{ company: "Adobe", num_occur: 2 },
			{ company: "Apple", num_occur: 2 }
		],
		"k-th-smallest-in-lexicographical-order": [
			{ company: "ByteDance", num_occur: 2 },
			{ company: "Hulu", num_occur: 1 }
		],
		"ternary-expression-parser": [{ company: "Snapchat", num_occur: 1 }],
		"find-all-anagrams-in-a-string": [
			{ company: "Amazon", num_occur: 15 },
			{ company: "Microsoft", num_occur: 11 },
			{ company: "Facebook", num_occur: 5 },
			{ company: "Apple", num_occur: 4 },
			{ company: "Adobe", num_occur: 4 },
			{ company: "Uber", num_occur: 3 },
			{ company: "Yahoo", num_occur: 3 },
			{ company: "Oracle", num_occur: 3 },
			{ company: "Bloomberg", num_occur: 3 },
			{ company: "Google", num_occur: 2 }
		],
		"path-sum-iii": [
			{ company: "Facebook", num_occur: 4 },
			{ company: "tiktok", num_occur: 4 },
			{ company: "Google", num_occur: 3 },
			{ company: "DoorDash", num_occur: 3 }
		],
		"find-right-interval": [
			{ company: "Amazon", num_occur: 2 },
			{ company: "Wish", num_occur: 2 }
		],
		"non-overlapping-intervals": [
			{ company: "Facebook", num_occur: 7 },
			{ company: "Amazon", num_occur: 4 },
			{ company: "Microsoft", num_occur: 2 }
		],
		"number-of-segments-in-a-string": [{ company: "Apple", num_occur: 2 }],
		"all-oone-data-structure": [
			{ company: "LinkedIn", num_occur: 17 },
			{ company: "Amazon", num_occur: 3 },
			{ company: "VMware", num_occur: 2 }
		],
		"flatten-a-multilevel-doubly-linked-list": [
			{ company: "Bloomberg", num_occur: 28 },
			{ company: "Google", num_occur: 2 },
			{ company: "Amazon", num_occur: 2 },
			{ company: "Oracle", num_occur: 2 }
		],
		"n-ary-tree-level-order-traversal": [{ company: "Microsoft", num_occur: 3 }],
		"word-squares": [{ company: "Google", num_occur: 3 }],
		"longest-repeating-character-replacement": [
			{ company: "Google", num_occur: 7 },
			{ company: "Amazon", num_occur: 6 },
			{ company: "Uber", num_occur: 4 },
			{ company: "Adobe", num_occur: 3 }
		],
		"reconstruct-original-digits-from-english": [{ company: "JPMorgan", num_occur: 69 }],
		"valid-word-square": [
			{ company: "Bloomberg", num_occur: 2 },
			{ company: "Google", num_occur: 1 }
		],
		"maximum-xor-of-two-numbers-in-an-array": [
			{ company: "Bloomberg", num_occur: 2 },
			{ company: "Adobe", num_occur: 2 }
		],
		"strong-password-checker": [
			{ company: "Amazon", num_occur: 6 },
			{ company: "Google", num_occur: 3 }
		],
		"battleships-in-a-board": [
			{ company: "Google", num_occur: 10 },
			{ company: "Twitch", num_occur: 7 },
			{ company: "Facebook", num_occur: 4 },
			{ company: "Microsoft", num_occur: 4 },
			{ company: "Apple", num_occur: 2 },
			{ company: "Amazon", num_occur: 2 },
			{ company: "GoDaddy", num_occur: 2 }
		],
		"sentence-screen-fitting": [{ company: "Google", num_occur: 8 }],
		"pacific-atlantic-water-flow": [
			{ company: "Google", num_occur: 10 },
			{ company: "Uber", num_occur: 3 },
			{ company: "Amazon", num_occur: 2 },
			{ company: "Salesforce", num_occur: 2 }
		],
		"partition-equal-subset-sum": [
			{ company: "Facebook", num_occur: 11 },
			{ company: "Microsoft", num_occur: 5 },
			{ company: "Amazon", num_occur: 4 },
			{ company: "Apple", num_occur: 2 },
			{ company: "Google", num_occur: 2 },
			{ company: "Walmart Global Tech", num_occur: 2 }
		],
		"add-strings": [
			{ company: "Facebook", num_occur: 54 },
			{ company: "Wayfair", num_occur: 20 },
			{ company: "Microsoft", num_occur: 9 },
			{ company: "Google", num_occur: 5 },
			{ company: "Oracle", num_occur: 4 },
			{ company: "Bloomberg", num_occur: 3 },
			{ company: "Amazon", num_occur: 3 },
			{ company: "Apple", num_occur: 2 }
		],
		"third-maximum-number": [
			{ company: "Amazon", num_occur: 2 },
			{ company: "Apple", num_occur: 2 },
			{ company: "Google", num_occur: 2 }
		],
		"arithmetic-slices": [
			{ company: "Amazon", num_occur: 2 },
			{ company: "Bloomberg", num_occur: 2 }
		],
		"fizz-buzz": [
			{ company: "Facebook", num_occur: 3 },
			{ company: "Microsoft", num_occur: 3 },
			{ company: "Apple", num_occur: 2 }
		],
		"minimum-unique-word-abbreviation": [{ company: "Google", num_occur: 1 }],
		"split-array-largest-sum": [
			{ company: "Google", num_occur: 8 },
			{ company: "Amazon", num_occur: 6 },
			{ company: "tiktok", num_occur: 6 },
			{ company: "Facebook", num_occur: 5 },
			{ company: "ByteDance", num_occur: 2 },
			{ company: "Apple", num_occur: 2 }
		],
		"longest-palindrome": [{ company: "Amazon", num_occur: 2 }],
		"valid-word-abbreviation": [
			{ company: "Facebook", num_occur: 114 },
			{ company: "Google", num_occur: 3 }
		],
		"trapping-rain-water-ii": [{ company: "Google", num_occur: 4 }],
		"queue-reconstruction-by-height": [{ company: "Facebook", num_occur: 3 }],
		"convert-a-number-to-hexadecimal": [
			{ company: "Google", num_occur: 2 },
			{ company: "Amazon", num_occur: 2 }
		],
		"sum-of-left-leaves": [{ company: "Adobe", num_occur: 2 }],
		"frog-jump": [
			{ company: "Amazon", num_occur: 6 },
			{ company: "Microsoft", num_occur: 3 },
			{ company: "Google", num_occur: 2 },
			{ company: "ByteDance", num_occur: 2 },
			{ company: "tiktok", num_occur: 2 }
		],
		"remove-k-digits": [
			{ company: "Amazon", num_occur: 10 },
			{ company: "Microsoft", num_occur: 3 },
			{ company: "Bloomberg", num_occur: 3 },
			{ company: "Google", num_occur: 2 },
			{ company: "Adobe", num_occur: 2 },
			{ company: "Facebook", num_occur: 2 },
			{ company: "MakeMyTrip", num_occur: 2 }
		],
		"binary-watch": [{ company: "Google", num_occur: 1 }],
		"nth-digit": [{ company: "Apple", num_occur: 3 }],
		"evaluate-division": [
			{ company: "Uber", num_occur: 14 },
			{ company: "Amazon", num_occur: 10 },
			{ company: "Google", num_occur: 8 },
			{ company: "Facebook", num_occur: 8 },
			{ company: "Snapchat", num_occur: 5 },
			{ company: "tiktok", num_occur: 4 },
			{ company: "Adobe", num_occur: 3 },
			{ company: "Bloomberg", num_occur: 2 },
			{ company: "BlackRock", num_occur: 2 }
		],
		"random-pick-index": [
			{ company: "Facebook", num_occur: 21 },
			{ company: "Google", num_occur: 3 },
			{ company: "Amazon", num_occur: 2 }
		],
		"integer-replacement": [{ company: "Bloomberg", num_occur: 2 }],
		"rotate-function": [
			{ company: "Google", num_occur: 3 },
			{ company: "Apple", num_occur: 2 },
			{ company: "Amazon", num_occur: 1 }
		],
		"longest-substring-with-at-least-k-repeating-characters": [
			{ company: "Amazon", num_occur: 3 },
			{ company: "Microsoft", num_occur: 2 }
		],
		"decode-string": [
			{ company: "Bloomberg", num_occur: 33 },
			{ company: "Google", num_occur: 19 },
			{ company: "Microsoft", num_occur: 14 },
			{ company: "Amazon", num_occur: 12 },
			{ company: "Facebook", num_occur: 11 },
			{ company: "Cisco", num_occur: 8 },
			{ company: "Oracle", num_occur: 6 },
			{ company: "Snapchat", num_occur: 5 },
			{ company: "Apple", num_occur: 5 },
			{ company: "tiktok", num_occur: 5 },
			{ company: "Adobe", num_occur: 3 },
			{ company: "Uber", num_occur: 3 },
			{ company: "Intuit", num_occur: 2 },
			{ company: "Cruise Automation", num_occur: 2 },
			{ company: "ByteDance", num_occur: 2 },
			{ company: "Walmart Global Tech", num_occur: 2 },
			{ company: "Sumologic", num_occur: 2 }
		],
		"utf-8-validation": [
			{ company: "Facebook", num_occur: 2 },
			{ company: "Palantir Technologies", num_occur: 2 }
		],
		"is-subsequence": [
			{ company: "Amazon", num_occur: 4 },
			{ company: "Google", num_occur: 3 },
			{ company: "Yandex", num_occur: 3 },
			{ company: "Adobe", num_occur: 2 }
		],
		"perfect-rectangle": [
			{ company: "Apple", num_occur: 4 },
			{ company: "Google", num_occur: 2 }
		],
		"elimination-game": [
			{ company: "Bloomberg", num_occur: 4 },
			{ company: "Goldman Sachs", num_occur: 4 },
			{ company: "Adobe", num_occur: 2 }
		],
		"find-the-difference": [
			{ company: "Google", num_occur: 6 },
			{ company: "Amazon", num_occur: 3 },
			{ company: "Apple", num_occur: 2 }
		],
		"longest-absolute-file-path": [
			{ company: "Google", num_occur: 7 },
			{ company: "Amazon", num_occur: 2 }
		],
		"first-unique-character-in-a-string": [
			{ company: "Amazon", num_occur: 30 },
			{ company: "Bloomberg", num_occur: 13 },
			{ company: "Apple", num_occur: 6 },
			{ company: "Microsoft", num_occur: 6 },
			{ company: "Oracle", num_occur: 5 },
			{ company: "Goldman Sachs", num_occur: 4 },
			{ company: "Facebook", num_occur: 4 },
			{ company: "Yahoo", num_occur: 3 },
			{ company: "Qualtrics", num_occur: 3 }
		],
		"mini-parser": [{ company: "Airbnb", num_occur: 1 }],
		"ransom-note": [
			{ company: "Spotify", num_occur: 10 },
			{ company: "Apple", num_occur: 3 },
			{ company: "Google", num_occur: 3 },
			{ company: "Adobe", num_occur: 2 }
		],
		"linked-list-random-node": [
			{ company: "Microsoft", num_occur: 2 },
			{ company: "Amazon", num_occur: 2 },
			{ company: "Google", num_occur: 1 }
		],
		"insert-delete-getrandom-o1-duplicates-allowed": [
			{ company: "Facebook", num_occur: 5 },
			{ company: "LinkedIn", num_occur: 4 },
			{ company: "Affirm", num_occur: 3 }
		],
		"insert-delete-getrandom-o1": [
			{ company: "Facebook", num_occur: 23 },
			{ company: "Bloomberg", num_occur: 23 },
			{ company: "Amazon", num_occur: 17 },
			{ company: "LinkedIn", num_occur: 15 },
			{ company: "Microsoft", num_occur: 12 },
			{ company: "Affirm", num_occur: 10 },
			{ company: "Uber", num_occur: 7 },
			{ company: "Twitter", num_occur: 5 },
			{ company: "Google", num_occur: 4 }
		],
		"design-phone-directory": [
			{ company: "Dropbox", num_occur: 2 },
			{ company: "Amazon", num_occur: 2 }
		],
		"kth-smallest-element-in-a-sorted-matrix": [
			{ company: "Facebook", num_occur: 18 },
			{ company: "Amazon", num_occur: 6 },
			{ company: "Microsoft", num_occur: 4 },
			{ company: "Google", num_occur: 4 },
			{ company: "Adobe", num_occur: 2 },
			{ company: "Bloomberg", num_occur: 2 },
			{ company: "Uber", num_occur: 2 },
			{ company: "ByteDance", num_occur: 2 }
		],
		"combination-sum-iv": [
			{ company: "Amazon", num_occur: 4 },
			{ company: "Google", num_occur: 3 },
			{ company: "Facebook", num_occur: 2 },
			{ company: "Microsoft", num_occur: 2 }
		],
		"wiggle-subsequence": [{ company: "Bloomberg", num_occur: 2 }],
		"guess-number-higher-or-lower-ii": [{ company: "Google", num_occur: 2 }],
		"guess-number-higher-or-lower": [
			{ company: "Adobe", num_occur: 4 },
			{ company: "Bloomberg", num_occur: 2 }
		],
		"find-k-pairs-with-smallest-sums": [
			{ company: "LinkedIn", num_occur: 8 },
			{ company: "Apple", num_occur: 3 },
			{ company: "Amazon", num_occur: 2 },
			{ company: "Walmart Global Tech", num_occur: 2 },
			{ company: "Hotstar", num_occur: 2 }
		],
		"super-pow": [{ company: "Adobe", num_occur: 2 }],
		"sum-of-two-integers": [{ company: "Facebook", num_occur: 2 }],
		"range-addition": [
			{ company: "Amazon", num_occur: 18 },
			{ company: "Citadel", num_occur: 5 }
		],
		"plus-one-linked-list": [{ company: "Google", num_occur: 1 }],
		"largest-divisible-subset": [{ company: "Google", num_occur: 2 }],
		"valid-perfect-square": [
			{ company: "LinkedIn", num_occur: 3 },
			{ company: "Google", num_occur: 3 }
		],
		"find-leaves-of-binary-tree": [
			{ company: "Google", num_occur: 75 },
			{ company: "LinkedIn", num_occur: 13 },
			{ company: "Microsoft", num_occur: 4 },
			{ company: "Facebook", num_occur: 2 },
			{ company: "Amazon", num_occur: 2 }
		],
		"water-and-jug-problem": [{ company: "Lyft", num_occur: 4 }],
		"nested-list-weight-sum-ii": [{ company: "LinkedIn", num_occur: 48 }],
		"max-sum-of-rectangle-no-larger-than-k": [{ company: "Dunzo", num_occur: 2 }],
		"design-hit-counter": [
			{ company: "Amazon", num_occur: 9 },
			{ company: "Databricks", num_occur: 9 },
			{ company: "Microsoft", num_occur: 8 },
			{ company: "Twitter", num_occur: 7 },
			{ company: "Affirm", num_occur: 6 },
			{ company: "Google", num_occur: 2 },
			{ company: "Apple", num_occur: 2 },
			{ company: "Uber", num_occur: 2 }
		],
		"bomb-enemy": [{ company: "Uber", num_occur: 4 }],
		"sort-transformed-array": [{ company: "LinkedIn", num_occur: 10 }],
		"logger-rate-limiter": [
			{ company: "Google", num_occur: 22 },
			{ company: "Atlassian", num_occur: 10 },
			{ company: "Microsoft", num_occur: 5 },
			{ company: "Amazon", num_occur: 3 },
			{ company: "Netflix", num_occur: 3 },
			{ company: "Apple", num_occur: 2 }
		],
		"rearrange-string-k-distance-apart": [
			{ company: "Google", num_occur: 3 },
			{ company: "Twitter", num_occur: 3 },
			{ company: "Microsoft", num_occur: 2 },
			{ company: "VMware", num_occur: 2 }
		],
		"count-numbers-with-unique-digits": [{ company: "Bloomberg", num_occur: 2 }],
		"line-reflection": [{ company: "Yandex", num_occur: 2 }],
		"design-twitter": [
			{ company: "Google", num_occur: 3 },
			{ company: "Amazon", num_occur: 2 },
			{ company: "Walmart Global Tech", num_occur: 2 }
		],
		"russian-doll-envelopes": [
			{ company: "Google", num_occur: 7 },
			{ company: "tiktok", num_occur: 2 }
		],
		"design-snake-game": [
			{ company: "Amazon", num_occur: 5 },
			{ company: "Square", num_occur: 3 },
			{ company: "Atlassian", num_occur: 3 },
			{ company: "tiktok", num_occur: 3 },
			{ company: "Google", num_occur: 2 },
			{ company: "Microsoft", num_occur: 2 },
			{ company: "IXL", num_occur: 2 }
		],
		"data-stream-as-disjoint-intervals": [{ company: "Microsoft", num_occur: 2 }],
		"android-unlock-patterns": [
			{ company: "Snapchat", num_occur: 3 },
			{ company: "Microsoft", num_occur: 2 }
		],
		"intersection-of-two-arrays-ii": [
			{ company: "Facebook", num_occur: 4 },
			{ company: "Amazon", num_occur: 4 },
			{ company: "Yahoo", num_occur: 4 },
			{ company: "Adobe", num_occur: 3 },
			{ company: "Bloomberg", num_occur: 2 }
		],
		"intersection-of-two-arrays": [
			{ company: "Amazon", num_occur: 9 },
			{ company: "Facebook", num_occur: 6 },
			{ company: "Apple", num_occur: 6 },
			{ company: "Adobe", num_occur: 5 },
			{ company: "Google", num_occur: 3 },
			{ company: "Microsoft", num_occur: 2 },
			{ company: "Bloomberg", num_occur: 2 },
			{ company: "JPMorgan", num_occur: 2 }
		],
		"design-tic-tac-toe": [
			{ company: "Facebook", num_occur: 15 },
			{ company: "Amazon", num_occur: 15 },
			{ company: "Microsoft", num_occur: 7 },
			{ company: "Google", num_occur: 4 },
			{ company: "Adobe", num_occur: 2 }
		],
		"top-k-frequent-elements": [
			{ company: "Facebook", num_occur: 97 },
			{ company: "Amazon", num_occur: 29 },
			{ company: "Microsoft", num_occur: 12 },
			{ company: "Google", num_occur: 8 },
			{ company: "Oracle", num_occur: 7 },
			{ company: "Uber", num_occur: 6 },
			{ company: "Apple", num_occur: 5 },
			{ company: "Bloomberg", num_occur: 4 },
			{ company: "Adobe", num_occur: 3 },
			{ company: "Cisco", num_occur: 3 }
		],
		"moving-average-from-data-stream": [
			{ company: "Facebook", num_occur: 43 },
			{ company: "Spotify", num_occur: 16 },
			{ company: "Amazon", num_occur: 4 },
			{ company: "Google", num_occur: 4 }
		],
		"reverse-vowels-of-a-string": [{ company: "Bloomberg", num_occur: 2 }],
		"reverse-string": [
			{ company: "Amazon", num_occur: 6 },
			{ company: "Microsoft", num_occur: 5 },
			{ company: "Adobe", num_occur: 5 },
			{ company: "Facebook", num_occur: 3 },
			{ company: "tcs", num_occur: 3 },
			{ company: "Apple", num_occur: 2 },
			{ company: "Intel", num_occur: 2 }
		],
		"integer-break": [{ company: "Facebook", num_occur: 3 }],
		"power-of-four": [{ company: "Two Sigma", num_occur: 1 }],
		"flatten-nested-list-iterator": [
			{ company: "LinkedIn", num_occur: 8 },
			{ company: "Apple", num_occur: 5 },
			{ company: "Facebook", num_occur: 4 },
			{ company: "Airbnb", num_occur: 4 },
			{ company: "Twitter", num_occur: 3 },
			{ company: "Uber", num_occur: 2 },
			{ company: "Amazon", num_occur: 2 },
			{ company: "Salesforce", num_occur: 2 }
		],
		"longest-substring-with-at-most-k-distinct-characters": [
			{ company: "Amazon", num_occur: 2 },
			{ company: "Google", num_occur: 2 }
		],
		"nested-list-weight-sum": [
			{ company: "Facebook", num_occur: 100 },
			{ company: "LinkedIn", num_occur: 34 },
			{ company: "Amazon", num_occur: 4 }
		],
		"counting-bits": [
			{ company: "Amazon", num_occur: 3 },
			{ company: "Google", num_occur: 2 },
			{ company: "Bloomberg", num_occur: 2 },
			{ company: "JPMorgan", num_occur: 2 }
		],
		"house-robber-iii": [
			{ company: "Amazon", num_occur: 6 },
			{ company: "Google", num_occur: 5 },
			{ company: "Adobe", num_occur: 3 }
		],
		"palindrome-pairs": [
			{ company: "Airbnb", num_occur: 14 },
			{ company: "Apple", num_occur: 3 },
			{ company: "Google", num_occur: 3 },
			{ company: "Shopee", num_occur: 3 },
			{ company: "Facebook", num_occur: 2 },
			{ company: "Microsoft", num_occur: 2 }
		],
		"self-crossing": [
			{ company: "Amazon", num_occur: 3 },
			{ company: "Google", num_occur: 2 }
		],
		"increasing-triplet-subsequence": [
			{ company: "Google", num_occur: 3 },
			{ company: "Facebook", num_occur: 2 }
		],
		"largest-bst-subtree": [
			{ company: "Facebook", num_occur: 7 },
			{ company: "Oracle", num_occur: 2 },
			{ company: "Cohesity", num_occur: 2 }
		],
		"reconstruct-itinerary": [
			{ company: "Uber", num_occur: 10 },
			{ company: "Facebook", num_occur: 6 },
			{ company: "Google", num_occur: 4 },
			{ company: "Amazon", num_occur: 4 },
			{ company: "Twitter", num_occur: 4 },
			{ company: "Netflix", num_occur: 2 }
		],
		"verify-preorder-serialization-of-a-binary-tree": [{ company: "Google", num_occur: 1 }],
		"patching-array": [{ company: "Amazon", num_occur: 2 }],
		"odd-even-linked-list": [
			{ company: "Facebook", num_occur: 6 },
			{ company: "Amazon", num_occur: 4 },
			{ company: "Adobe", num_occur: 4 },
			{ company: "eBay", num_occur: 2 },
			{ company: "tiktok", num_occur: 2 }
		],
		"power-of-three": [{ company: "Amazon", num_occur: 2 }],
		"maximum-size-subarray-sum-equals-k": [
			{ company: "Facebook", num_occur: 11 },
			{ company: "Amazon", num_occur: 2 }
		],
		"wiggle-sort-ii": [{ company: "Adobe", num_occur: 2 }],
		"number-of-connected-components-in-an-undirected-graph": [
			{ company: "Amazon", num_occur: 6 },
			{ company: "LinkedIn", num_occur: 3 },
			{ company: "Facebook", num_occur: 3 },
			{ company: "Google", num_occur: 2 },
			{ company: "Microsoft", num_occur: 2 },
			{ company: "Pinterest", num_occur: 2 }
		],
		"coin-change": [
			{ company: "Amazon", num_occur: 18 },
			{ company: "Microsoft", num_occur: 14 },
			{ company: "Google", num_occur: 5 },
			{ company: "Mathworks", num_occur: 5 },
			{ company: "Bloomberg", num_occur: 4 },
			{ company: "Facebook", num_occur: 2 },
			{ company: "Yahoo", num_occur: 2 },
			{ company: "Goldman Sachs", num_occur: 2 }
		],
		"create-maximum-number": [
			{ company: "Apple", num_occur: 2 },
			{ company: "Google", num_occur: 1 }
		],
		"generalized-abbreviation": [{ company: "Google", num_occur: 1 }],
		"bulb-switcher": [
			{ company: "LinkedIn", num_occur: 4 },
			{ company: "Microsoft", num_occur: 3 }
		],
		"maximum-product-of-word-lengths": [{ company: "Bloomberg", num_occur: 2 }],
		"shortest-distance-from-all-buildings": [
			{ company: "Facebook", num_occur: 22 },
			{ company: "Microsoft", num_occur: 7 },
			{ company: "Google", num_occur: 6 },
			{ company: "DoorDash", num_occur: 5 }
		],
		"remove-duplicate-letters": [
			{ company: "Apple", num_occur: 4 },
			{ company: "Facebook", num_occur: 2 },
			{ company: "Amazon", num_occur: 2 },
			{ company: "Salesforce", num_occur: 2 }
		],
		"count-of-smaller-numbers-after-self": [
			{ company: "Google", num_occur: 6 },
			{ company: "Microsoft", num_occur: 5 },
			{ company: "Amazon", num_occur: 3 },
			{ company: "Adobe", num_occur: 2 }
		],
		"binary-tree-vertical-order-traversal": [
			{ company: "Facebook", num_occur: 188 },
			{ company: "Bloomberg", num_occur: 8 },
			{ company: "Amazon", num_occur: 4 },
			{ company: "Microsoft", num_occur: 3 }
		],
		"super-ugly-number": [
			{ company: "Google", num_occur: 2 },
			{ company: "Bloomberg", num_occur: 2 },
			{ company: "Apple", num_occur: 2 }
		],
		"burst-balloons": [
			{ company: "Google", num_occur: 7 },
			{ company: "Microsoft", num_occur: 6 },
			{ company: "Apple", num_occur: 4 },
			{ company: "Bloomberg", num_occur: 4 },
			{ company: "Uber", num_occur: 3 },
			{ company: "Amazon", num_occur: 2 }
		],
		"sparse-matrix-multiplication": [
			{ company: "Facebook", num_occur: 10 },
			{ company: "Snapchat", num_occur: 5 },
			{ company: "Amazon", num_occur: 2 },
			{ company: "Databricks", num_occur: 2 }
		],
		"minimum-height-trees": [
			{ company: "Amazon", num_occur: 2 },
			{ company: "Snapchat", num_occur: 2 }
		],
		"range-sum-query-2d-mutable": [{ company: "Google", num_occur: 3 }],
		"range-sum-query-mutable": [
			{ company: "Google", num_occur: 6 },
			{ company: "Amazon", num_occur: 3 }
		],
		"additive-number": [
			{ company: "Booking.com", num_occur: 3 },
			{ company: "Epic Systems", num_occur: 2 }
		],
		"number-of-islands-ii": [
			{ company: "Uber", num_occur: 5 },
			{ company: "Google", num_occur: 2 }
		],
		"range-sum-query-2d-immutable": [
			{ company: "Facebook", num_occur: 10 },
			{ company: "Lyft", num_occur: 4 },
			{ company: "Amazon", num_occur: 3 },
			{ company: "Google", num_occur: 2 },
			{ company: "Samsung", num_occur: 2 }
		],
		"range-sum-query-immutable": [{ company: "Facebook", num_occur: 2 }],
		"smallest-rectangle-enclosing-black-pixels": [{ company: "Google", num_occur: 7 }],
		"remove-invalid-parentheses": [
			{ company: "Facebook", num_occur: 36 },
			{ company: "Amazon", num_occur: 2 }
		],
		"bulls-and-cows": [
			{ company: "Google", num_occur: 12 },
			{ company: "Facebook", num_occur: 2 }
		],
		"binary-tree-longest-consecutive-sequence": [
			{ company: "Facebook", num_occur: 3 },
			{ company: "Amazon", num_occur: 2 },
			{ company: "Google", num_occur: 2 }
		],
		"serialize-and-deserialize-binary-tree": [
			{ company: "Amazon", num_occur: 21 },
			{ company: "Microsoft", num_occur: 20 },
			{ company: "LinkedIn", num_occur: 18 },
			{ company: "DoorDash", num_occur: 7 },
			{ company: "Uber", num_occur: 4 },
			{ company: "Nvidia", num_occur: 4 },
			{ company: "tiktok", num_occur: 4 },
			{ company: "Google", num_occur: 3 },
			{ company: "Oracle", num_occur: 3 }
		],
		"best-meeting-point": [
			{ company: "Expedia", num_occur: 4 },
			{ company: "Google", num_occur: 2 },
			{ company: "Facebook", num_occur: 2 }
		],
		"flip-game-ii": [{ company: "Google", num_occur: 1 }],
		"flip-game": [{ company: "Google", num_occur: 1 }],
		"nim-game": [
			{ company: "Adobe", num_occur: 3 },
			{ company: "Microsoft", num_occur: 2 }
		],
		"word-pattern-ii": [
			{ company: "Uber", num_occur: 3 },
			{ company: "Bolt", num_occur: 2 },
			{ company: "Pinterest", num_occur: 2 }
		],
		"word-pattern": [
			{ company: "Amazon", num_occur: 4 },
			{ company: "Bolt", num_occur: 3 },
			{ company: "Uber", num_occur: 2 },
			{ company: "Adobe", num_occur: 2 }
		],
		"game-of-life": [
			{ company: "Opendoor", num_occur: 10 },
			{ company: "Amazon", num_occur: 6 },
			{ company: "Dropbox", num_occur: 5 },
			{ company: "Bloomberg", num_occur: 4 },
			{ company: "Adobe", num_occur: 4 },
			{ company: "Google", num_occur: 3 },
			{ company: "Microsoft", num_occur: 3 },
			{ company: "Snapchat", num_occur: 2 },
			{ company: "Apple", num_occur: 2 }
		],
		"unique-word-abbreviation": [
			{ company: "Facebook", num_occur: 3 },
			{ company: "Google", num_occur: 1 }
		],
		"find-the-duplicate-number": [
			{ company: "Amazon", num_occur: 16 },
			{ company: "Microsoft", num_occur: 11 },
			{ company: "Facebook", num_occur: 4 },
			{ company: "Uber", num_occur: 3 },
			{ company: "Apple", num_occur: 3 },
			{ company: "Google", num_occur: 2 },
			{ company: "Qualcomm", num_occur: 2 }
		],
		"walls-and-gates": [
			{ company: "Facebook", num_occur: 15 },
			{ company: "DoorDash", num_occur: 11 },
			{ company: "Google", num_occur: 5 },
			{ company: "tiktok", num_occur: 5 },
			{ company: "Amazon", num_occur: 4 },
			{ company: "Microsoft", num_occur: 3 },
			{ company: "Bloomberg", num_occur: 2 }
		],
		"inorder-successor-in-bst": [
			{ company: "Microsoft", num_occur: 11 },
			{ company: "Facebook", num_occur: 6 },
			{ company: "Google", num_occur: 3 },
			{ company: "Adobe", num_occur: 2 }
		],
		"peeking-iterator": [
			{ company: "Google", num_occur: 8 },
			{ company: "Apple", num_occur: 3 },
			{ company: "Amazon", num_occur: 3 },
			{ company: "Microsoft", num_occur: 2 }
		],
		"move-zeroes": [
			{ company: "Facebook", num_occur: 19 },
			{ company: "Microsoft", num_occur: 10 },
			{ company: "Apple", num_occur: 8 },
			{ company: "Amazon", num_occur: 8 },
			{ company: "Yandex", num_occur: 6 },
			{ company: "Bloomberg", num_occur: 4 },
			{ company: "tcs", num_occur: 4 },
			{ company: "Uber", num_occur: 2 },
			{ company: "Adobe", num_occur: 2 },
			{ company: "IBM", num_occur: 2 },
			{ company: "Expedia", num_occur: 2 },
			{ company: "tiktok", num_occur: 2 }
		],
		"expression-add-operators": [{ company: "Facebook", num_occur: 23 }],
		"zigzag-iterator": [
			{ company: "Yandex", num_occur: 6 },
			{ company: "Apple", num_occur: 2 },
			{ company: "Amazon", num_occur: 2 },
			{ company: "Google", num_occur: 1 }
		],
		"wiggle-sort": [{ company: "Amazon", num_occur: 2 }],
		"perfect-squares": [
			{ company: "Apple", num_occur: 2 },
			{ company: "Amazon", num_occur: 2 },
			{ company: "Google", num_occur: 2 },
			{ company: "Microsoft", num_occur: 2 }
		],
		"first-bad-version": [
			{ company: "Google", num_occur: 19 },
			{ company: "Amazon", num_occur: 12 },
			{ company: "Facebook", num_occur: 7 },
			{ company: "Microsoft", num_occur: 6 },
			{ company: "Apple", num_occur: 5 },
			{ company: "Adobe", num_occur: 4 },
			{ company: "Cisco", num_occur: 2 }
		],
		"find-the-celebrity": [
			{ company: "LinkedIn", num_occur: 6 },
			{ company: "Microsoft", num_occur: 5 },
			{ company: "Amazon", num_occur: 4 },
			{ company: "Pinterest", num_occur: 3 },
			{ company: "Apple", num_occur: 3 },
			{ company: "Facebook", num_occur: 2 }
		],
		"paint-fence": [
			{ company: "Google", num_occur: 2 },
			{ company: "JPMorgan", num_occur: 2 }
		],
		"h-index-ii": [{ company: "Goldman Sachs", num_occur: 2 }],
		"h-index": [
			{ company: "Google", num_occur: 9 },
			{ company: "Alation", num_occur: 3 },
			{ company: "Amazon", num_occur: 2 },
			{ company: "Facebook", num_occur: 2 },
			{ company: "Apple", num_occur: 2 }
		],
		"integer-to-english-words": [
			{ company: "Facebook", num_occur: 20 },
			{ company: "Amazon", num_occur: 19 },
			{ company: "Microsoft", num_occur: 7 },
			{ company: "DoorDash", num_occur: 4 },
			{ company: "Salesforce", num_occur: 3 },
			{ company: "Expedia", num_occur: 3 },
			{ company: "Apple", num_occur: 2 },
			{ company: "Booking.com", num_occur: 2 }
		],
		"closest-binary-search-tree-value-ii": [
			{ company: "LinkedIn", num_occur: 26 },
			{ company: "Google", num_occur: 2 }
		],
		"encode-and-decode-strings": [
			{ company: "Facebook", num_occur: 3 },
			{ company: "LinkedIn", num_occur: 2 }
		],
		"closest-binary-search-tree-value": [{ company: "Facebook", num_occur: 21 }],
		"alien-dictionary": [
			{ company: "Facebook", num_occur: 16 },
			{ company: "Airbnb", num_occur: 14 },
			{ company: "Amazon", num_occur: 10 },
			{ company: "Google", num_occur: 7 },
			{ company: "Bloomberg", num_occur: 4 },
			{ company: "Uber", num_occur: 3 },
			{ company: "Microsoft", num_occur: 3 },
			{ company: "Pinterest", num_occur: 2 },
			{ company: "Snapchat", num_occur: 2 }
		],
		"missing-number": [
			{ company: "Microsoft", num_occur: 13 },
			{ company: "Amazon", num_occur: 8 },
			{ company: "Facebook", num_occur: 6 },
			{ company: "Adobe", num_occur: 3 },
			{ company: "Apple", num_occur: 3 },
			{ company: "Salesforce", num_occur: 2 },
			{ company: "VMware", num_occur: 2 },
			{ company: "Nvidia", num_occur: 2 }
		],
		"palindrome-permutation-ii": [
			{ company: "Google", num_occur: 3 },
			{ company: "Cruise Automation", num_occur: 2 }
		],
		"palindrome-permutation": [{ company: "Facebook", num_occur: 12 }],
		"paint-house-ii": [
			{ company: "LinkedIn", num_occur: 3 },
			{ company: "Walmart Global Tech", num_occur: 2 },
			{ company: "Facebook", num_occur: 1 }
		],
		"ugly-number-ii": [{ company: "Microsoft", num_occur: 2 }],
		"ugly-number": [{ company: "Facebook", num_occur: 3 }],
		"graph-valid-tree": [
			{ company: "LinkedIn", num_occur: 8 },
			{ company: "Google", num_occur: 3 },
			{ company: "Amazon", num_occur: 2 },
			{ company: "Microsoft", num_occur: 2 }
		],
		"single-number-iii": [{ company: "Google", num_occur: 2 }],
		"add-digits": [{ company: "Bloomberg", num_occur: 2 }],
		"binary-tree-paths": [
			{ company: "Amazon", num_occur: 3 },
			{ company: "Bloomberg", num_occur: 3 },
			{ company: "Facebook", num_occur: 2 },
			{ company: "Google", num_occur: 2 },
			{ company: "Microsoft", num_occur: 2 }
		],
		"paint-house": [
			{ company: "LinkedIn", num_occur: 5 },
			{ company: "Twitter", num_occur: 4 },
			{ company: "Amazon", num_occur: 3 }
		],
		"verify-preorder-sequence-in-binary-search-tree": [
			{ company: "VMware", num_occur: 4 },
			{ company: "Oracle", num_occur: 2 },
			{ company: "Zenefits", num_occur: 1 }
		],
		"factor-combinations": [{ company: "LinkedIn", num_occur: 5 }],
		"meeting-rooms-ii": [
			{ company: "Amazon", num_occur: 48 },
			{ company: "Facebook", num_occur: 33 },
			{ company: "Google", num_occur: 22 },
			{ company: "Bloomberg", num_occur: 20 },
			{ company: "Microsoft", num_occur: 14 },
			{ company: "Oracle", num_occur: 13 },
			{ company: "Visa", num_occur: 3 },
			{ company: "Uber", num_occur: 2 },
			{ company: "Snapchat", num_occur: 2 }
		],
		"meeting-rooms": [
			{ company: "Amazon", num_occur: 4 },
			{ company: "Google", num_occur: 2 }
		],
		"flatten-2d-vector": [{ company: "Airbnb", num_occur: 9 }],
		"count-univalue-subtrees": [
			{ company: "Microsoft", num_occur: 3 },
			{ company: "Google", num_occur: 2 }
		],
		"group-shifted-strings": [
			{ company: "Facebook", num_occur: 47 },
			{ company: "Google", num_occur: 2 }
		],
		"strobogrammatic-number-iii": [{ company: "Google", num_occur: 4 }],
		"strobogrammatic-number-ii": [
			{ company: "Facebook", num_occur: 4 },
			{ company: "Uber", num_occur: 3 },
			{ company: "Google", num_occur: 2 }
		],
		"strobogrammatic-number": [
			{ company: "Facebook", num_occur: 19 },
			{ company: "Uber", num_occur: 2 }
		],
		"shortest-word-distance-iii": [
			{ company: "LinkedIn", num_occur: 2 },
			{ company: "Amazon", num_occur: 2 }
		],
		"shortest-word-distance-ii": [{ company: "LinkedIn", num_occur: 71 }],
		"shortest-word-distance": [
			{ company: "LinkedIn", num_occur: 11 },
			{ company: "Amazon", num_occur: 3 },
			{ company: "Microsoft", num_occur: 2 },
			{ company: "Facebook", num_occur: 2 },
			{ company: "Salesforce", num_occur: 2 }
		],
		"valid-anagram": [
			{ company: "Facebook", num_occur: 8 },
			{ company: "Bloomberg", num_occur: 8 },
			{ company: "Amazon", num_occur: 8 },
			{ company: "Spotify", num_occur: 8 },
			{ company: "Microsoft", num_occur: 6 },
			{ company: "Goldman Sachs", num_occur: 3 },
			{ company: "Affirm", num_occur: 3 },
			{ company: "Google", num_occur: 2 },
			{ company: "Apple", num_occur: 2 }
		],
		"different-ways-to-add-parentheses": [
			{ company: "Google", num_occur: 3 },
			{ company: "Bloomberg", num_occur: 3 },
			{ company: "Snapchat", num_occur: 2 }
		],
		"search-a-2d-matrix-ii": [
			{ company: "Amazon", num_occur: 10 },
			{ company: "Microsoft", num_occur: 5 },
			{ company: "Bloomberg", num_occur: 3 },
			{ company: "Apple", num_occur: 2 },
			{ company: "Facebook", num_occur: 2 },
			{ company: "Oracle", num_occur: 2 }
		],
		"sliding-window-maximum": [
			{ company: "Amazon", num_occur: 32 },
			{ company: "Google", num_occur: 8 },
			{ company: "Microsoft", num_occur: 6 },
			{ company: "Salesforce", num_occur: 6 },
			{ company: "Uber", num_occur: 5 },
			{ company: "Facebook", num_occur: 5 },
			{ company: "Adobe", num_occur: 4 },
			{ company: "Citadel", num_occur: 4 },
			{ company: "ByteDance", num_occur: 4 },
			{ company: "Apple", num_occur: 3 },
			{ company: "Twilio", num_occur: 3 },
			{ company: "tiktok", num_occur: 3 },
			{ company: "Bloomberg", num_occur: 2 },
			{ company: "VMware", num_occur: 2 },
			{ company: "Booking.com", num_occur: 2 },
			{ company: "DoorDash", num_occur: 2 },
			{ company: "DE Shaw", num_occur: 2 },
			{ company: "Quora", num_occur: 2 }
		],
		"product-of-array-except-self": [
			{ company: "Amazon", num_occur: 32 },
			{ company: "Facebook", num_occur: 18 },
			{ company: "Microsoft", num_occur: 15 },
			{ company: "Asana", num_occur: 13 },
			{ company: "Apple", num_occur: 10 },
			{ company: "Uber", num_occur: 8 },
			{ company: "Adobe", num_occur: 7 },
			{ company: "Bloomberg", num_occur: 4 },
			{ company: "Oracle", num_occur: 4 }
		],
		"delete-node-in-a-linked-list": [
			{ company: "Microsoft", num_occur: 3 },
			{ company: "Amazon", num_occur: 2 }
		],
		"lowest-common-ancestor-of-a-binary-tree": [
			{ company: "Facebook", num_occur: 180 },
			{ company: "Amazon", num_occur: 25 },
			{ company: "LinkedIn", num_occur: 11 },
			{ company: "Microsoft", num_occur: 10 },
			{ company: "Google", num_occur: 8 },
			{ company: "Oracle", num_occur: 3 },
			{ company: "Sumologic", num_occur: 3 },
			{ company: "Karat", num_occur: 3 },
			{ company: "Apple", num_occur: 2 }
		],
		"lowest-common-ancestor-of-a-binary-search-tree": [
			{ company: "LinkedIn", num_occur: 18 },
			{ company: "Facebook", num_occur: 5 },
			{ company: "Amazon", num_occur: 3 },
			{ company: "Apple", num_occur: 3 },
			{ company: "Google", num_occur: 2 },
			{ company: "Microsoft", num_occur: 2 }
		],
		"palindrome-linked-list": [
			{ company: "Facebook", num_occur: 16 },
			{ company: "Amazon", num_occur: 16 },
			{ company: "Microsoft", num_occur: 10 },
			{ company: "Apple", num_occur: 6 },
			{ company: "Bloomberg", num_occur: 3 },
			{ company: "Google", num_occur: 3 },
			{ company: "Adobe", num_occur: 2 },
			{ company: "ServiceNow", num_occur: 2 },
			{ company: "VMware", num_occur: 2 },
			{ company: "Yahoo", num_occur: 2 },
			{ company: "Intuit", num_occur: 2 }
		],
		"number-of-digit-one": [
			{ company: "Microsoft", num_occur: 4 },
			{ company: "Google", num_occur: 4 }
		],
		"implement-queue-using-stacks": [
			{ company: "Amazon", num_occur: 8 },
			{ company: "Microsoft", num_occur: 3 },
			{ company: "Goldman Sachs", num_occur: 3 },
			{ company: "eBay", num_occur: 2 },
			{ company: "Google", num_occur: 2 }
		],
		"power-of-two": [
			{ company: "Amazon", num_occur: 5 },
			{ company: "Apple", num_occur: 4 },
			{ company: "Google", num_occur: 3 },
			{ company: "Snapchat", num_occur: 2 }
		],
		"kth-smallest-element-in-a-bst": [
			{ company: "Uber", num_occur: 11 },
			{ company: "Amazon", num_occur: 9 },
			{ company: "Facebook", num_occur: 6 },
			{ company: "Microsoft", num_occur: 2 },
			{ company: "LinkedIn", num_occur: 2 }
		],
		"majority-element-ii": [
			{ company: "Amazon", num_occur: 4 },
			{ company: "Microsoft", num_occur: 3 },
			{ company: "Adobe", num_occur: 2 }
		],
		"summary-ranges": [
			{ company: "Yandex", num_occur: 6 },
			{ company: "Qualtrics", num_occur: 2 }
		],
		"basic-calculator-ii": [
			{ company: "Facebook", num_occur: 118 },
			{ company: "Amazon", num_occur: 13 },
			{ company: "Microsoft", num_occur: 11 },
			{ company: "ByteDance", num_occur: 4 },
			{ company: "Snapchat", num_occur: 3 },
			{ company: "Oracle", num_occur: 3 },
			{ company: "Uber", num_occur: 2 },
			{ company: "Apple", num_occur: 2 },
			{ company: "Tesla", num_occur: 2 },
			{ company: "Yahoo", num_occur: 2 }
		],
		"invert-binary-tree": [
			{ company: "Amazon", num_occur: 5 },
			{ company: "Facebook", num_occur: 5 },
			{ company: "Google", num_occur: 3 },
			{ company: "Uber", num_occur: 3 },
			{ company: "Apple", num_occur: 3 },
			{ company: "Bloomberg", num_occur: 2 }
		],
		"implement-stack-using-queues": [{ company: "Amazon", num_occur: 3 }],
		"basic-calculator": [
			{ company: "Google", num_occur: 12 },
			{ company: "Facebook", num_occur: 10 },
			{ company: "Amazon", num_occur: 7 },
			{ company: "DoorDash", num_occur: 6 },
			{ company: "Uber", num_occur: 5 },
			{ company: "Microsoft", num_occur: 5 },
			{ company: "ByteDance", num_occur: 3 },
			{ company: "Snapchat", num_occur: 2 },
			{ company: "Adobe", num_occur: 2 }
		],
		"rectangle-area": [{ company: "Amazon", num_occur: 2 }],
		"count-complete-tree-nodes": [
			{ company: "Google", num_occur: 7 },
			{ company: "Amazon", num_occur: 5 },
			{ company: "tiktok", num_occur: 4 }
		],
		"maximal-square": [
			{ company: "Microsoft", num_occur: 7 },
			{ company: "Visa", num_occur: 6 },
			{ company: "Amazon", num_occur: 3 },
			{ company: "Google", num_occur: 3 },
			{ company: "IBM", num_occur: 3 },
			{ company: "Salesforce", num_occur: 3 },
			{ company: "ByteDance", num_occur: 2 },
			{ company: "FactSet", num_occur: 2 }
		],
		"contains-duplicate-iii": [
			{ company: "Google", num_occur: 4 },
			{ company: "Adobe", num_occur: 2 },
			{ company: "Apple", num_occur: 2 },
			{ company: "Amazon", num_occur: 2 }
		],
		"contains-duplicate-ii": [
			{ company: "Facebook", num_occur: 15 },
			{ company: "Google", num_occur: 3 },
			{ company: "Adobe", num_occur: 3 },
			{ company: "Uber", num_occur: 2 },
			{ company: "Amazon", num_occur: 2 },
			{ company: "Bloomberg", num_occur: 2 },
			{ company: "Microsoft", num_occur: 2 }
		],
		"the-skyline-problem": [
			{ company: "Microsoft", num_occur: 4 },
			{ company: "Cruise Automation", num_occur: 3 },
			{ company: "Google", num_occur: 2 },
			{ company: "Uber", num_occur: 2 }
		],
		"contains-duplicate": [
			{ company: "Amazon", num_occur: 19 },
			{ company: "Adobe", num_occur: 12 },
			{ company: "Google", num_occur: 6 },
			{ company: "Apple", num_occur: 6 },
			{ company: "Microsoft", num_occur: 3 },
			{ company: "Bloomberg", num_occur: 2 },
			{ company: "Uber", num_occur: 2 },
			{ company: "Yahoo", num_occur: 2 },
			{ company: "tcs", num_occur: 2 }
		],
		"combination-sum-iii": [{ company: "Google", num_occur: 3 }],
		"kth-largest-element-in-an-array": [
			{ company: "Facebook", num_occur: 140 },
			{ company: "Amazon", num_occur: 16 },
			{ company: "LinkedIn", num_occur: 14 },
			{ company: "Microsoft", num_occur: 12 },
			{ company: "Google", num_occur: 8 },
			{ company: "Bloomberg", num_occur: 5 },
			{ company: "Adobe", num_occur: 5 },
			{ company: "tiktok", num_occur: 3 },
			{ company: "Goldman Sachs", num_occur: 2 }
		],
		"shortest-palindrome": [
			{ company: "Bloomberg", num_occur: 3 },
			{ company: "Microsoft", num_occur: 3 },
			{ company: "Apple", num_occur: 2 }
		],
		"house-robber-ii": [
			{ company: "Google", num_occur: 9 },
			{ company: "Amazon", num_occur: 4 }
		],
		"word-search-ii": [
			{ company: "Uber", num_occur: 36 },
			{ company: "Amazon", num_occur: 31 },
			{ company: "Cisco", num_occur: 16 },
			{ company: "Microsoft", num_occur: 7 },
			{ company: "Facebook", num_occur: 5 },
			{ company: "Snapchat", num_occur: 5 },
			{ company: "Google", num_occur: 5 },
			{ company: "Twitter", num_occur: 5 },
			{ company: "Karat", num_occur: 5 },
			{ company: "Apple", num_occur: 4 }
		],
		"add-and-search-word-data-structure-design": [
			{ company: "Facebook", num_occur: 7 },
			{ company: "Amazon", num_occur: 7 },
			{ company: "Microsoft", num_occur: 4 },
			{ company: "Apple", num_occur: 2 },
			{ company: "Google", num_occur: 2 },
			{ company: "ByteDance", num_occur: 2 },
			{ company: "Nvidia", num_occur: 2 }
		],
		"course-schedule-ii": [
			{ company: "Amazon", num_occur: 34 },
			{ company: "Google", num_occur: 11 },
			{ company: "Microsoft", num_occur: 10 },
			{ company: "Robinhood", num_occur: 7 },
			{ company: "Facebook", num_occur: 5 },
			{ company: "Apple", num_occur: 5 },
			{ company: "Roblox", num_occur: 5 },
			{ company: "Twilio", num_occur: 5 },
			{ company: "Wayfair", num_occur: 4 },
			{ company: "Karat", num_occur: 4 },
			{ company: "VMware", num_occur: 4 },
			{ company: "Salesforce", num_occur: 3 },
			{ company: "ByteDance", num_occur: 3 },
			{ company: "Uber", num_occur: 2 },
			{ company: "tiktok", num_occur: 2 }
		],
		"minimum-size-subarray-sum": [
			{ company: "Facebook", num_occur: 8 },
			{ company: "Amazon", num_occur: 6 },
			{ company: "Microsoft", num_occur: 4 },
			{ company: "Bloomberg", num_occur: 2 },
			{ company: "Goldman Sachs", num_occur: 2 },
			{ company: "Google", num_occur: 2 },
			{ company: "Apple", num_occur: 2 },
			{ company: "Arcesium", num_occur: 2 }
		],
		"implement-trie-prefix-tree": [
			{ company: "Amazon", num_occur: 15 },
			{ company: "Google", num_occur: 9 },
			{ company: "Twitter", num_occur: 6 },
			{ company: "Microsoft", num_occur: 5 },
			{ company: "Snapchat", num_occur: 4 },
			{ company: "Apple", num_occur: 3 },
			{ company: "Facebook", num_occur: 2 },
			{ company: "Oracle", num_occur: 2 },
			{ company: "ByteDance", num_occur: 2 }
		],
		"course-schedule": [
			{ company: "Amazon", num_occur: 28 },
			{ company: "Microsoft", num_occur: 10 },
			{ company: "Facebook", num_occur: 9 },
			{ company: "tiktok", num_occur: 7 },
			{ company: "Google", num_occur: 5 },
			{ company: "Apple", num_occur: 3 },
			{ company: "Uber", num_occur: 2 },
			{ company: "Bloomberg", num_occur: 2 },
			{ company: "Oracle", num_occur: 2 }
		],
		"reverse-linked-list": [
			{ company: "Amazon", num_occur: 12 },
			{ company: "Microsoft", num_occur: 10 },
			{ company: "Apple", num_occur: 6 },
			{ company: "Bloomberg", num_occur: 4 },
			{ company: "Facebook", num_occur: 4 },
			{ company: "Google", num_occur: 3 },
			{ company: "Yandex", num_occur: 3 },
			{ company: "Intuit", num_occur: 2 },
			{ company: "Nvidia", num_occur: 2 }
		],
		"isomorphic-strings": [
			{ company: "Amazon", num_occur: 7 },
			{ company: "LinkedIn", num_occur: 6 },
			{ company: "Google", num_occur: 3 }
		],
		"count-primes": [
			{ company: "Capital One", num_occur: 14 },
			{ company: "Microsoft", num_occur: 4 },
			{ company: "Amazon", num_occur: 4 },
			{ company: "Apple", num_occur: 2 },
			{ company: "Adobe", num_occur: 2 },
			{ company: "SAP", num_occur: 2 },
			{ company: "tiktok", num_occur: 2 }
		],
		"remove-linked-list-elements": [
			{ company: "Amazon", num_occur: 4 },
			{ company: "Microsoft", num_occur: 3 },
			{ company: "Facebook", num_occur: 2 },
			{ company: "Adobe", num_occur: 2 }
		],
		"happy-number": [
			{ company: "Google", num_occur: 22 },
			{ company: "Apple", num_occur: 7 },
			{ company: "Amazon", num_occur: 6 },
			{ company: "Adobe", num_occur: 4 },
			{ company: "Paypal", num_occur: 4 },
			{ company: "Uber", num_occur: 3 }
		],
		"bitwise-and-of-numbers-range": [{ company: "Adobe", num_occur: 2 }],
		"number-of-islands": [
			{ company: "Amazon", num_occur: 103 },
			{ company: "Microsoft", num_occur: 42 },
			{ company: "Facebook", num_occur: 34 },
			{ company: "Bloomberg", num_occur: 33 },
			{ company: "Google", num_occur: 21 },
			{ company: "LinkedIn", num_occur: 16 },
			{ company: "Apple", num_occur: 11 },
			{ company: "Oracle", num_occur: 9 },
			{ company: "Uber", num_occur: 7 },
			{ company: "Salesforce", num_occur: 6 },
			{ company: "ByteDance", num_occur: 6 },
			{ company: "tiktok", num_occur: 6 },
			{ company: "DoorDash", num_occur: 5 },
			{ company: "Docusign", num_occur: 5 },
			{ company: "SAP", num_occur: 4 },
			{ company: "Karat", num_occur: 4 },
			{ company: "Adobe", num_occur: 3 },
			{ company: "Qualtrics", num_occur: 3 },
			{ company: "Goldman Sachs", num_occur: 3 },
			{ company: "Paypal", num_occur: 3 },
			{ company: "Nvidia", num_occur: 3 },
			{ company: "VMware", num_occur: 3 },
			{ company: "ServiceNow", num_occur: 3 },
			{ company: "Shopee", num_occur: 3 },
			{ company: "eBay", num_occur: 2 },
			{ company: "Snapchat", num_occur: 2 },
			{ company: "Dropbox", num_occur: 2 },
			{ company: "Square", num_occur: 2 },
			{ company: "Twitch", num_occur: 2 },
			{ company: "Cruise Automation", num_occur: 2 }
		],
		"binary-tree-right-side-view": [
			{ company: "Facebook", num_occur: 108 },
			{ company: "Amazon", num_occur: 10 },
			{ company: "Bloomberg", num_occur: 4 },
			{ company: "Qualtrics", num_occur: 4 },
			{ company: "Oracle", num_occur: 3 },
			{ company: "Apple", num_occur: 2 },
			{ company: "Uber", num_occur: 2 },
			{ company: "Microsoft", num_occur: 2 },
			{ company: "DoorDash", num_occur: 2 }
		],
		"house-robber": [
			{ company: "Amazon", num_occur: 21 },
			{ company: "Apple", num_occur: 8 },
			{ company: "Google", num_occur: 7 },
			{ company: "Cisco", num_occur: 6 },
			{ company: "Microsoft", num_occur: 5 },
			{ company: "Adobe", num_occur: 4 },
			{ company: "Bloomberg", num_occur: 2 },
			{ company: "Facebook", num_occur: 2 },
			{ company: "Walmart Global Tech", num_occur: 2 }
		],
		"number-of-1-bits": [
			{ company: "Box", num_occur: 12 },
			{ company: "Facebook", num_occur: 4 },
			{ company: "Cisco", num_occur: 4 },
			{ company: "Amazon", num_occur: 3 },
			{ company: "Google", num_occur: 2 },
			{ company: "Oracle", num_occur: 2 }
		],
		"reverse-bits": [
			{ company: "Apple", num_occur: 3 },
			{ company: "Facebook", num_occur: 3 },
			{ company: "Qualcomm", num_occur: 3 },
			{ company: "Microsoft", num_occur: 2 },
			{ company: "Google", num_occur: 2 }
		],
		"rotate-array": [
			{ company: "Amazon", num_occur: 9 },
			{ company: "Microsoft", num_occur: 7 },
			{ company: "Google", num_occur: 4 },
			{ company: "Facebook", num_occur: 2 },
			{ company: "Yahoo", num_occur: 2 },
			{ company: "tcs", num_occur: 2 },
			{ company: "Salesforce", num_occur: 2 }
		],
		"best-time-to-buy-and-sell-stock-iv": [
			{ company: "Amazon", num_occur: 4 },
			{ company: "Apple", num_occur: 3 },
			{ company: "Nvidia", num_occur: 3 },
			{ company: "Google", num_occur: 2 },
			{ company: "Citadel", num_occur: 2 }
		],
		"repeated-dna-sequences": [
			{ company: "LinkedIn", num_occur: 5 },
			{ company: "Amazon", num_occur: 2 }
		],
		"reverse-words-in-a-string-ii": [{ company: "Microsoft", num_occur: 4 }],
		"largest-number": [
			{ company: "Salesforce", num_occur: 6 },
			{ company: "Microsoft", num_occur: 4 },
			{ company: "Facebook", num_occur: 3 },
			{ company: "Amazon", num_occur: 2 },
			{ company: "Apple", num_occur: 2 },
			{ company: "Adobe", num_occur: 2 },
			{ company: "Goldman Sachs", num_occur: 2 },
			{ company: "Visa", num_occur: 2 },
			{ company: "Oracle", num_occur: 2 }
		],
		"dungeon-game": [
			{ company: "Uber", num_occur: 12 },
			{ company: "Amazon", num_occur: 2 }
		],
		"binary-search-tree-iterator": [
			{ company: "Facebook", num_occur: 50 },
			{ company: "Microsoft", num_occur: 9 },
			{ company: "Amazon", num_occur: 4 },
			{ company: "Bloomberg", num_occur: 4 },
			{ company: "Salesforce", num_occur: 3 },
			{ company: "Google", num_occur: 2 }
		],
		"factorial-trailing-zeroes": [
			{ company: "Amazon", num_occur: 4 },
			{ company: "Oracle", num_occur: 2 }
		],
		"excel-sheet-column-number": [
			{ company: "Microsoft", num_occur: 6 },
			{ company: "Google", num_occur: 2 },
			{ company: "Apple", num_occur: 2 }
		],
		"two-sum-iii-data-structure-design": [{ company: "LinkedIn", num_occur: 2 }],
		"majority-element": [
			{ company: "Amazon", num_occur: 9 },
			{ company: "Microsoft", num_occur: 6 },
			{ company: "Adobe", num_occur: 5 },
			{ company: "Apple", num_occur: 4 },
			{ company: "Google", num_occur: 3 },
			{ company: "Bloomberg", num_occur: 3 },
			{ company: "Facebook", num_occur: 2 },
			{ company: "Uber", num_occur: 2 },
			{ company: "Rubrik", num_occur: 2 }
		],
		"excel-sheet-column-title": [
			{ company: "Microsoft", num_occur: 4 },
			{ company: "Google", num_occur: 2 },
			{ company: "Amazon", num_occur: 2 }
		],
		"two-sum-ii-input-array-is-sorted": [
			{ company: "Amazon", num_occur: 11 },
			{ company: "Adobe", num_occur: 5 },
			{ company: "Google", num_occur: 4 },
			{ company: "Apple", num_occur: 3 },
			{ company: "Microsoft", num_occur: 2 },
			{ company: "Yahoo", num_occur: 2 }
		],
		"fraction-to-recurring-decimal": [
			{ company: "Mathworks", num_occur: 5 },
			{ company: "Facebook", num_occur: 4 },
			{ company: "Goldman Sachs", num_occur: 3 },
			{ company: "Airbnb", num_occur: 3 }
		],
		"compare-version-numbers": [
			{ company: "Amazon", num_occur: 7 },
			{ company: "Microsoft", num_occur: 4 },
			{ company: "Arista Networks", num_occur: 2 },
			{ company: "Nutanix", num_occur: 2 }
		],
		"maximum-gap": [
			{ company: "Amazon", num_occur: 2 },
			{ company: "Facebook", num_occur: 2 }
		],
		"missing-ranges": [{ company: "Facebook", num_occur: 8 }],
		"find-peak-element": [
			{ company: "Facebook", num_occur: 82 },
			{ company: "Amazon", num_occur: 8 },
			{ company: "Google", num_occur: 7 },
			{ company: "Uber", num_occur: 5 },
			{ company: "Snapchat", num_occur: 4 },
			{ company: "HRT", num_occur: 3 },
			{ company: "Apple", num_occur: 2 },
			{ company: "Microsoft", num_occur: 2 },
			{ company: "Roblox", num_occur: 2 }
		],
		"one-edit-distance": [
			{ company: "Facebook", num_occur: 7 },
			{ company: "Google", num_occur: 5 },
			{ company: "Yahoo", num_occur: 2 }
		],
		"intersection-of-two-linked-lists": [
			{ company: "Microsoft", num_occur: 8 },
			{ company: "Amazon", num_occur: 8 },
			{ company: "LinkedIn", num_occur: 6 },
			{ company: "Facebook", num_occur: 4 },
			{ company: "Adobe", num_occur: 3 },
			{ company: "Nvidia", num_occur: 3 },
			{ company: "tiktok", num_occur: 3 },
			{ company: "Airbnb", num_occur: 2 }
		],
		"longest-substring-with-at-most-two-distinct-characters": [
			{ company: "Amazon", num_occur: 4 },
			{ company: "Microsoft", num_occur: 2 }
		],
		"read-n-characters-given-read4-ii-call-multiple-times": [
			{ company: "Lyft", num_occur: 8 },
			{ company: "Google", num_occur: 4 },
			{ company: "Facebook", num_occur: 2 },
			{ company: "Microsoft", num_occur: 2 }
		],
		"read-n-characters-given-read4": [
			{ company: "Microsoft", num_occur: 4 },
			{ company: "Facebook", num_occur: 3 },
			{ company: "Rubrik", num_occur: 2 },
			{ company: "Amazon", num_occur: 2 },
			{ company: "Lyft", num_occur: 2 }
		],
		"binary-tree-upside-down": [{ company: "LinkedIn", num_occur: 9 }],
		"min-stack": [
			{ company: "Amazon", num_occur: 18 },
			{ company: "Microsoft", num_occur: 10 },
			{ company: "Bloomberg", num_occur: 7 },
			{ company: "Facebook", num_occur: 4 },
			{ company: "Google", num_occur: 3 },
			{ company: "Salesforce", num_occur: 3 },
			{ company: "Adobe", num_occur: 2 },
			{ company: "Oracle", num_occur: 2 }
		],
		"find-minimum-in-rotated-sorted-array-ii": [{ company: "Google", num_occur: 2 }],
		"find-minimum-in-rotated-sorted-array": [
			{ company: "Amazon", num_occur: 8 },
			{ company: "Facebook", num_occur: 8 },
			{ company: "Microsoft", num_occur: 7 },
			{ company: "Adobe", num_occur: 3 },
			{ company: "Goldman Sachs", num_occur: 2 },
			{ company: "Uber", num_occur: 2 },
			{ company: "Oracle", num_occur: 2 }
		],
		"maximum-product-subarray": [
			{ company: "LinkedIn", num_occur: 29 },
			{ company: "Amazon", num_occur: 17 },
			{ company: "Microsoft", num_occur: 3 },
			{ company: "Bloomberg", num_occur: 3 },
			{ company: "Infosys", num_occur: 3 },
			{ company: "Google", num_occur: 2 },
			{ company: "Adobe", num_occur: 2 }
		],
		"reverse-words-in-a-string": [
			{ company: "Microsoft", num_occur: 34 },
			{ company: "Apple", num_occur: 3 },
			{ company: "LinkedIn", num_occur: 2 },
			{ company: "Amazon", num_occur: 2 },
			{ company: "Google", num_occur: 2 },
			{ company: "Visa", num_occur: 2 }
		],
		"evaluate-reverse-polish-notation": [
			{ company: "Google", num_occur: 73 },
			{ company: "LinkedIn", num_occur: 8 },
			{ company: "Amazon", num_occur: 6 },
			{ company: "Microsoft", num_occur: 2 },
			{ company: "Facebook", num_occur: 2 },
			{ company: "Oracle", num_occur: 2 },
			{ company: "Yandex", num_occur: 2 }
		],
		"max-points-on-a-line": [
			{ company: "LinkedIn", num_occur: 8 },
			{ company: "Amazon", num_occur: 4 },
			{ company: "Google", num_occur: 3 },
			{ company: "Oracle", num_occur: 3 },
			{ company: "Sprinklr", num_occur: 2 }
		],
		"sort-list": [
			{ company: "Facebook", num_occur: 6 },
			{ company: "Microsoft", num_occur: 3 },
			{ company: "Amazon", num_occur: 3 },
			{ company: "ByteDance", num_occur: 3 },
			{ company: "Apple", num_occur: 2 }
		],
		"insertion-sort-list": [{ company: "Google", num_occur: 2 }],
		"lru-cache": [
			{ company: "Amazon", num_occur: 117 },
			{ company: "Facebook", num_occur: 60 },
			{ company: "Microsoft", num_occur: 52 },
			{ company: "Apple", num_occur: 20 },
			{ company: "Bloomberg", num_occur: 19 },
			{ company: "Oracle", num_occur: 13 },
			{ company: "Salesforce", num_occur: 10 },
			{ company: "Google", num_occur: 9 },
			{ company: "Intuit", num_occur: 8 },
			{ company: "Twilio", num_occur: 7 },
			{ company: "Goldman Sachs", num_occur: 6 },
			{ company: "tiktok", num_occur: 6 },
			{ company: "LinkedIn", num_occur: 5 },
			{ company: "ByteDance", num_occur: 5 },
			{ company: "Adobe", num_occur: 4 },
			{ company: "Walmart Global Tech", num_occur: 4 },
			{ company: "Yahoo", num_occur: 3 },
			{ company: "Snapchat", num_occur: 3 },
			{ company: "Nvidia", num_occur: 3 },
			{ company: "VMware", num_occur: 2 },
			{ company: "Uber", num_occur: 2 },
			{ company: "Paypal", num_occur: 2 },
			{ company: "GoDaddy", num_occur: 2 },
			{ company: "Morgan Stanley", num_occur: 2 },
			{ company: "Docusign", num_occur: 2 },
			{ company: "Shopee", num_occur: 2 }
		],
		"binary-tree-postorder-traversal": [
			{ company: "Facebook", num_occur: 2 },
			{ company: "TuSimple", num_occur: 2 }
		],
		"binary-tree-preorder-traversal": [
			{ company: "Adobe", num_occur: 2 },
			{ company: "Google", num_occur: 2 }
		],
		"reorder-list": [
			{ company: "Amazon", num_occur: 10 },
			{ company: "Microsoft", num_occur: 4 },
			{ company: "Adobe", num_occur: 3 },
			{ company: "Facebook", num_occur: 2 },
			{ company: "Bloomberg", num_occur: 2 },
			{ company: "Uber", num_occur: 2 },
			{ company: "Samsung", num_occur: 2 }
		],
		"linked-list-cycle-ii": [
			{ company: "Amazon", num_occur: 7 },
			{ company: "Microsoft", num_occur: 2 }
		],
		"linked-list-cycle": [
			{ company: "Amazon", num_occur: 9 },
			{ company: "Spotify", num_occur: 4 },
			{ company: "Microsoft", num_occur: 3 },
			{ company: "Oracle", num_occur: 3 },
			{ company: "Visa", num_occur: 3 },
			{ company: "Google", num_occur: 2 },
			{ company: "Goldman Sachs", num_occur: 2 }
		],
		"word-break-ii": [
			{ company: "Facebook", num_occur: 22 },
			{ company: "Amazon", num_occur: 11 },
			{ company: "Bloomberg", num_occur: 7 },
			{ company: "Apple", num_occur: 4 },
			{ company: "Adobe", num_occur: 4 },
			{ company: "Google", num_occur: 3 },
			{ company: "Microsoft", num_occur: 3 },
			{ company: "Snapchat", num_occur: 3 }
		],
		"word-break": [
			{ company: "Amazon", num_occur: 34 },
			{ company: "Facebook", num_occur: 33 },
			{ company: "Apple", num_occur: 10 },
			{ company: "Qualtrics", num_occur: 7 },
			{ company: "Microsoft", num_occur: 5 },
			{ company: "Bloomberg", num_occur: 5 },
			{ company: "Oracle", num_occur: 3 },
			{ company: "Adobe", num_occur: 3 },
			{ company: "Google", num_occur: 2 }
		],
		"copy-list-with-random-pointer": [
			{ company: "Facebook", num_occur: 64 },
			{ company: "Amazon", num_occur: 19 },
			{ company: "Microsoft", num_occur: 12 },
			{ company: "Bloomberg", num_occur: 3 },
			{ company: "Google", num_occur: 3 },
			{ company: "Apple", num_occur: 2 }
		],
		"single-number-ii": [{ company: "Amazon", num_occur: 5 }],
		"single-number": [
			{ company: "Amazon", num_occur: 8 },
			{ company: "Microsoft", num_occur: 5 },
			{ company: "Bloomberg", num_occur: 5 },
			{ company: "Google", num_occur: 4 },
			{ company: "Adobe", num_occur: 4 },
			{ company: "Apple", num_occur: 4 },
			{ company: "Facebook", num_occur: 4 },
			{ company: "Uber", num_occur: 2 },
			{ company: "Atlassian", num_occur: 2 }
		],
		candy: [{ company: "Amazon", num_occur: 8 }],
		"gas-station": [
			{ company: "Amazon", num_occur: 19 },
			{ company: "IBM", num_occur: 8 },
			{ company: "Microsoft", num_occur: 7 },
			{ company: "Apple", num_occur: 5 },
			{ company: "tiktok", num_occur: 5 },
			{ company: "Walmart Global Tech", num_occur: 3 },
			{ company: "Bloomberg", num_occur: 3 },
			{ company: "Adobe", num_occur: 3 },
			{ company: "Uber", num_occur: 2 }
		],
		"clone-graph": [
			{ company: "Facebook", num_occur: 38 },
			{ company: "Amazon", num_occur: 8 },
			{ company: "Bloomberg", num_occur: 6 },
			{ company: "Google", num_occur: 5 },
			{ company: "Microsoft", num_occur: 4 },
			{ company: "Pinterest", num_occur: 2 }
		],
		"palindrome-partitioning-ii": [{ company: "Amazon", num_occur: 2 }],
		"palindrome-partitioning": [
			{ company: "Apple", num_occur: 3 },
			{ company: "Google", num_occur: 3 },
			{ company: "tiktok", num_occur: 3 },
			{ company: "Amazon", num_occur: 2 },
			{ company: "Facebook", num_occur: 2 }
		],
		"surrounded-regions": [
			{ company: "Google", num_occur: 5 },
			{ company: "Bloomberg", num_occur: 4 },
			{ company: "Uber", num_occur: 2 },
			{ company: "tiktok", num_occur: 2 }
		],
		"sum-root-to-leaf-numbers": [
			{ company: "Facebook", num_occur: 31 },
			{ company: "Microsoft", num_occur: 4 },
			{ company: "Amazon", num_occur: 3 }
		],
		"longest-consecutive-sequence": [
			{ company: "Amazon", num_occur: 9 },
			{ company: "Microsoft", num_occur: 8 },
			{ company: "Google", num_occur: 7 },
			{ company: "Adobe", num_occur: 3 },
			{ company: "Spotify", num_occur: 3 },
			{ company: "Bloomberg", num_occur: 2 },
			{ company: "Apple", num_occur: 2 },
			{ company: "Visa", num_occur: 2 },
			{ company: "Qualtrics", num_occur: 2 },
			{ company: "eBay", num_occur: 2 }
		],
		"word-ladder": [
			{ company: "Amazon", num_occur: 41 },
			{ company: "Facebook", num_occur: 13 },
			{ company: "LinkedIn", num_occur: 7 },
			{ company: "Microsoft", num_occur: 6 },
			{ company: "Qualtrics", num_occur: 6 },
			{ company: "Apple", num_occur: 5 },
			{ company: "Snapchat", num_occur: 4 },
			{ company: "Lyft", num_occur: 4 },
			{ company: "Adobe", num_occur: 4 }
		],
		"word-ladder-ii": [
			{ company: "Amazon", num_occur: 9 },
			{ company: "Box", num_occur: 4 },
			{ company: "Facebook", num_occur: 4 },
			{ company: "Snapchat", num_occur: 3 },
			{ company: "Microsoft", num_occur: 2 }
		],
		"valid-palindrome": [
			{ company: "Facebook", num_occur: 94 },
			{ company: "Amazon", num_occur: 8 },
			{ company: "Microsoft", num_occur: 8 },
			{ company: "Apple", num_occur: 5 },
			{ company: "Adobe", num_occur: 3 },
			{ company: "Bloomberg", num_occur: 3 },
			{ company: "American Express", num_occur: 3 },
			{ company: "Yandex", num_occur: 2 },
			{ company: "Wayfair", num_occur: 2 }
		],
		"binary-tree-maximum-path-sum": [
			{ company: "DoorDash", num_occur: 18 },
			{ company: "Amazon", num_occur: 17 },
			{ company: "Facebook", num_occur: 16 },
			{ company: "Microsoft", num_occur: 7 },
			{ company: "Google", num_occur: 6 },
			{ company: "ByteDance", num_occur: 6 },
			{ company: "tiktok", num_occur: 6 },
			{ company: "Oracle", num_occur: 3 },
			{ company: "Snapchat", num_occur: 3 },
			{ company: "Bloomberg", num_occur: 2 },
			{ company: "Adobe", num_occur: 2 },
			{ company: "Twitter", num_occur: 2 },
			{ company: "Twilio", num_occur: 2 },
			{ company: "Sprinklr", num_occur: 2 },
			{ company: "TuSimple", num_occur: 2 }
		],
		"best-time-to-buy-and-sell-stock-iii": [
			{ company: "Amazon", num_occur: 7 },
			{ company: "Uber", num_occur: 3 },
			{ company: "Apple", num_occur: 2 }
		],
		"best-time-to-buy-and-sell-stock-ii": [
			{ company: "Amazon", num_occur: 13 },
			{ company: "Facebook", num_occur: 5 },
			{ company: "Walmart Global Tech", num_occur: 4 },
			{ company: "Microsoft", num_occur: 3 },
			{ company: "Bloomberg", num_occur: 3 },
			{ company: "Google", num_occur: 3 },
			{ company: "ByteDance", num_occur: 3 },
			{ company: "Oracle", num_occur: 2 }
		],
		"best-time-to-buy-and-sell-stock": [
			{ company: "Amazon", num_occur: 56 },
			{ company: "Facebook", num_occur: 16 },
			{ company: "Microsoft", num_occur: 14 },
			{ company: "Bloomberg", num_occur: 12 },
			{ company: "Google", num_occur: 12 },
			{ company: "Goldman Sachs", num_occur: 11 },
			{ company: "Adobe", num_occur: 8 },
			{ company: "Apple", num_occur: 8 },
			{ company: "Uber", num_occur: 7 },
			{ company: "Expedia", num_occur: 5 },
			{ company: "Oracle", num_occur: 4 },
			{ company: "Capital One", num_occur: 4 },
			{ company: "JPMorgan", num_occur: 3 },
			{ company: "Walmart Global Tech", num_occur: 3 },
			{ company: "ByteDance", num_occur: 3 },
			{ company: "Paypal", num_occur: 2 },
			{ company: "VMware", num_occur: 2 },
			{ company: "eBay", num_occur: 2 },
			{ company: "Cisco", num_occur: 2 },
			{ company: "Salesforce", num_occur: 2 },
			{ company: "Atlassian", num_occur: 2 },
			{ company: "ServiceNow", num_occur: 2 },
			{ company: "Visa", num_occur: 2 },
			{ company: "Docusign", num_occur: 2 },
			{ company: "Alation", num_occur: 2 },
			{ company: "tcs", num_occur: 2 },
			{ company: "tiktok", num_occur: 2 },
			{ company: "Zoho", num_occur: 2 },
			{ company: "Netflix", num_occur: 2 },
			{ company: "Zoom", num_occur: 2 }
		],
		triangle: [
			{ company: "Amazon", num_occur: 4 },
			{ company: "Microsoft", num_occur: 3 }
		],
		"pascals-triangle-ii": [
			{ company: "Microsoft", num_occur: 2 },
			{ company: "Goldman Sachs", num_occur: 2 }
		],
		"pascals-triangle": [
			{ company: "Amazon", num_occur: 5 },
			{ company: "Apple", num_occur: 4 },
			{ company: "Microsoft", num_occur: 4 },
			{ company: "Goldman Sachs", num_occur: 3 },
			{ company: "Snapchat", num_occur: 2 },
			{ company: "Uber", num_occur: 2 },
			{ company: "Yahoo", num_occur: 2 }
		],
		"distinct-subsequences": [
			{ company: "Amazon", num_occur: 4 },
			{ company: "Mathworks", num_occur: 3 },
			{ company: "Google", num_occur: 2 }
		],
		"flatten-binary-tree-to-linked-list": [
			{ company: "Facebook", num_occur: 10 },
			{ company: "Amazon", num_occur: 6 },
			{ company: "Microsoft", num_occur: 6 },
			{ company: "Salesforce", num_occur: 2 }
		],
		"path-sum-ii": [
			{ company: "Amazon", num_occur: 5 },
			{ company: "Facebook", num_occur: 4 },
			{ company: "Google", num_occur: 3 },
			{ company: "Microsoft", num_occur: 2 },
			{ company: "Oracle", num_occur: 2 }
		],
		"path-sum": [
			{ company: "Facebook", num_occur: 8 },
			{ company: "Microsoft", num_occur: 7 },
			{ company: "Amazon", num_occur: 2 },
			{ company: "Oracle", num_occur: 2 },
			{ company: "Walmart Global Tech", num_occur: 2 }
		],
		"minimum-depth-of-binary-tree": [
			{ company: "Facebook", num_occur: 4 },
			{ company: "Bloomberg", num_occur: 2 }
		],
		"balanced-binary-tree": [
			{ company: "Amazon", num_occur: 5 },
			{ company: "Spotify", num_occur: 4 },
			{ company: "Facebook", num_occur: 2 },
			{ company: "Google", num_occur: 2 },
			{ company: "Adobe", num_occur: 2 }
		],
		"convert-sorted-list-to-binary-search-tree": [
			{ company: "Facebook", num_occur: 11 },
			{ company: "Amazon", num_occur: 7 },
			{ company: "Microsoft", num_occur: 3 },
			{ company: "Google", num_occur: 2 }
		],
		"convert-sorted-array-to-binary-search-tree": [
			{ company: "Amazon", num_occur: 3 },
			{ company: "Microsoft", num_occur: 2 },
			{ company: "Apple", num_occur: 2 },
			{ company: "Facebook", num_occur: 2 },
			{ company: "Oracle", num_occur: 2 }
		],
		"binary-tree-level-order-traversal-ii": [{ company: "Amazon", num_occur: 2 }],
		"construct-binary-tree-from-inorder-and-postorder-traversal": [{ company: "Shopee", num_occur: 3 }],
		"construct-binary-tree-from-preorder-and-inorder-traversal": [
			{ company: "Microsoft", num_occur: 4 },
			{ company: "Bloomberg", num_occur: 3 },
			{ company: "Google", num_occur: 3 },
			{ company: "Amazon", num_occur: 3 },
			{ company: "Uber", num_occur: 2 },
			{ company: "ByteDance", num_occur: 2 }
		],
		"maximum-depth-of-binary-tree": [
			{ company: "LinkedIn", num_occur: 10 },
			{ company: "Amazon", num_occur: 4 },
			{ company: "Spotify", num_occur: 4 },
			{ company: "Google", num_occur: 4 },
			{ company: "Microsoft", num_occur: 3 },
			{ company: "Bloomberg", num_occur: 2 },
			{ company: "Apple", num_occur: 2 },
			{ company: "Facebook", num_occur: 2 }
		],
		"binary-tree-zigzag-level-order-traversal": [
			{ company: "Amazon", num_occur: 28 },
			{ company: "Facebook", num_occur: 18 },
			{ company: "Microsoft", num_occur: 13 },
			{ company: "Bloomberg", num_occur: 5 },
			{ company: "Google", num_occur: 3 },
			{ company: "Apple", num_occur: 2 },
			{ company: "LinkedIn", num_occur: 2 },
			{ company: "Oracle", num_occur: 2 },
			{ company: "Adobe", num_occur: 2 }
		],
		"binary-tree-level-order-traversal": [
			{ company: "LinkedIn", num_occur: 9 },
			{ company: "Amazon", num_occur: 8 },
			{ company: "Microsoft", num_occur: 7 },
			{ company: "Facebook", num_occur: 6 },
			{ company: "Bloomberg", num_occur: 6 },
			{ company: "Oracle", num_occur: 4 },
			{ company: "Google", num_occur: 3 },
			{ company: "ServiceNow", num_occur: 3 },
			{ company: "Apple", num_occur: 2 }
		],
		"symmetric-tree": [
			{ company: "Facebook", num_occur: 12 },
			{ company: "Amazon", num_occur: 8 },
			{ company: "LinkedIn", num_occur: 5 },
			{ company: "Google", num_occur: 5 },
			{ company: "Microsoft", num_occur: 5 },
			{ company: "Bloomberg", num_occur: 3 },
			{ company: "Uber", num_occur: 2 },
			{ company: "Adobe", num_occur: 2 }
		],
		"same-tree": [
			{ company: "LinkedIn", num_occur: 6 },
			{ company: "Amazon", num_occur: 5 },
			{ company: "Google", num_occur: 3 },
			{ company: "Apple", num_occur: 3 },
			{ company: "Facebook", num_occur: 2 },
			{ company: "Bloomberg", num_occur: 2 }
		],
		"recover-binary-search-tree": [
			{ company: "Amazon", num_occur: 15 },
			{ company: "Microsoft", num_occur: 4 },
			{ company: "Apple", num_occur: 3 },
			{ company: "Google", num_occur: 2 },
			{ company: "Adobe", num_occur: 2 },
			{ company: "Bloomberg", num_occur: 2 }
		],
		"validate-binary-search-tree": [
			{ company: "Amazon", num_occur: 25 },
			{ company: "Bloomberg", num_occur: 14 },
			{ company: "Facebook", num_occur: 8 },
			{ company: "Microsoft", num_occur: 6 },
			{ company: "Adobe", num_occur: 4 },
			{ company: "Qualtrics", num_occur: 2 },
			{ company: "VMware", num_occur: 2 },
			{ company: "Oracle", num_occur: 2 },
			{ company: "tiktok", num_occur: 2 }
		],
		"interleaving-string": [
			{ company: "Amazon", num_occur: 4 },
			{ company: "Apple", num_occur: 4 },
			{ company: "Google", num_occur: 3 },
			{ company: "Uber", num_occur: 2 },
			{ company: "Bloomberg", num_occur: 2 }
		],
		"unique-binary-search-trees": [{ company: "Amazon", num_occur: 4 }],
		"unique-binary-search-trees-ii": [{ company: "Microsoft", num_occur: 4 }],
		"binary-tree-inorder-traversal": [
			{ company: "Microsoft", num_occur: 4 },
			{ company: "Amazon", num_occur: 4 },
			{ company: "Apple", num_occur: 3 },
			{ company: "Adobe", num_occur: 2 }
		],
		"restore-ip-addresses": [
			{ company: "Yahoo", num_occur: 5 },
			{ company: "Amazon", num_occur: 3 },
			{ company: "Microsoft", num_occur: 3 },
			{ company: "tiktok", num_occur: 3 },
			{ company: "Facebook", num_occur: 2 },
			{ company: "ByteDance", num_occur: 2 },
			{ company: "Arista Networks", num_occur: 2 }
		],
		"reverse-linked-list-ii": [
			{ company: "Facebook", num_occur: 7 },
			{ company: "Microsoft", num_occur: 5 },
			{ company: "Amazon", num_occur: 5 },
			{ company: "Google", num_occur: 3 },
			{ company: "Apple", num_occur: 2 },
			{ company: "Adobe", num_occur: 2 }
		],
		"decode-ways": [
			{ company: "Amazon", num_occur: 9 },
			{ company: "Cisco", num_occur: 9 },
			{ company: "Google", num_occur: 8 },
			{ company: "Lyft", num_occur: 7 },
			{ company: "Facebook", num_occur: 4 },
			{ company: "Microsoft", num_occur: 4 },
			{ company: "Bloomberg", num_occur: 3 },
			{ company: "Apple", num_occur: 3 },
			{ company: "Goldman Sachs", num_occur: 3 }
		],
		"subsets-ii": [
			{ company: "Facebook", num_occur: 3 },
			{ company: "Amazon", num_occur: 2 },
			{ company: "Bloomberg", num_occur: 2 },
			{ company: "Adobe", num_occur: 2 }
		],
		"gray-code": [{ company: "Amazon", num_occur: 2 }],
		"merge-sorted-array": [
			{ company: "Facebook", num_occur: 89 },
			{ company: "Microsoft", num_occur: 10 },
			{ company: "Apple", num_occur: 8 },
			{ company: "Amazon", num_occur: 5 },
			{ company: "LinkedIn", num_occur: 5 },
			{ company: "Bloomberg", num_occur: 4 },
			{ company: "Shopee", num_occur: 4 },
			{ company: "Indeed", num_occur: 2 },
			{ company: "Uber", num_occur: 2 },
			{ company: "Oracle", num_occur: 2 }
		],
		"scramble-string": [{ company: "Yahoo", num_occur: 2 }],
		"partition-list": [{ company: "Adobe", num_occur: 2 }],
		"maximal-rectangle": [
			{ company: "Google", num_occur: 4 },
			{ company: "Amazon", num_occur: 3 },
			{ company: "Apple", num_occur: 2 }
		],
		"largest-rectangle-in-histogram": [
			{ company: "Amazon", num_occur: 12 },
			{ company: "Microsoft", num_occur: 6 },
			{ company: "Adobe", num_occur: 4 },
			{ company: "Facebook", num_occur: 4 },
			{ company: "Uber", num_occur: 4 },
			{ company: "Bloomberg", num_occur: 2 },
			{ company: "ByteDance", num_occur: 2 },
			{ company: "DoorDash", num_occur: 2 }
		],
		"remove-duplicates-from-sorted-list": [
			{ company: "Amazon", num_occur: 6 },
			{ company: "Facebook", num_occur: 4 },
			{ company: "Bloomberg", num_occur: 2 },
			{ company: "Adobe", num_occur: 2 },
			{ company: "Microsoft", num_occur: 2 }
		],
		"remove-duplicates-from-sorted-list-ii": [
			{ company: "Amazon", num_occur: 6 },
			{ company: "Microsoft", num_occur: 2 },
			{ company: "Facebook", num_occur: 2 }
		],
		"search-in-rotated-sorted-array-ii": [
			{ company: "Amazon", num_occur: 5 },
			{ company: "LinkedIn", num_occur: 4 },
			{ company: "Adobe", num_occur: 3 },
			{ company: "Facebook", num_occur: 2 }
		],
		"remove-duplicates-from-sorted-array-ii": [{ company: "Adobe", num_occur: 3 }],
		"word-search": [
			{ company: "Amazon", num_occur: 36 },
			{ company: "Twitter", num_occur: 23 },
			{ company: "Uber", num_occur: 17 },
			{ company: "Karat", num_occur: 17 },
			{ company: "Microsoft", num_occur: 16 },
			{ company: "Bloomberg", num_occur: 14 },
			{ company: "Facebook", num_occur: 12 },
			{ company: "Indeed", num_occur: 9 },
			{ company: "Snapchat", num_occur: 7 }
		],
		subsets: [
			{ company: "Facebook", num_occur: 38 },
			{ company: "Amazon", num_occur: 13 },
			{ company: "Google", num_occur: 7 },
			{ company: "Bloomberg", num_occur: 4 },
			{ company: "Microsoft", num_occur: 3 },
			{ company: "Apple", num_occur: 3 },
			{ company: "Twitter", num_occur: 3 },
			{ company: "Reddit", num_occur: 3 },
			{ company: "Adobe", num_occur: 2 },
			{ company: "Uber", num_occur: 2 }
		],
		combinations: [
			{ company: "Facebook", num_occur: 5 },
			{ company: "Google", num_occur: 5 },
			{ company: "Amazon", num_occur: 2 },
			{ company: "Microsoft", num_occur: 2 }
		],
		"minimum-window-substring": [
			{ company: "Facebook", num_occur: 20 },
			{ company: "Amazon", num_occur: 11 },
			{ company: "LinkedIn", num_occur: 10 },
			{ company: "Lyft", num_occur: 9 },
			{ company: "Microsoft", num_occur: 7 },
			{ company: "Airbnb", num_occur: 6 },
			{ company: "Apple", num_occur: 4 },
			{ company: "Adobe", num_occur: 3 },
			{ company: "Snapchat", num_occur: 2 },
			{ company: "Oracle", num_occur: 2 }
		],
		"sort-colors": [
			{ company: "Microsoft", num_occur: 8 },
			{ company: "Amazon", num_occur: 8 },
			{ company: "VMware", num_occur: 3 },
			{ company: "Adobe", num_occur: 3 },
			{ company: "Salesforce", num_occur: 3 },
			{ company: "Nvidia", num_occur: 3 },
			{ company: "Grab", num_occur: 3 },
			{ company: "Uber", num_occur: 2 },
			{ company: "Facebook", num_occur: 2 },
			{ company: "Intel", num_occur: 2 }
		],
		"search-a-2d-matrix": [
			{ company: "Facebook", num_occur: 14 },
			{ company: "Amazon", num_occur: 12 },
			{ company: "Microsoft", num_occur: 7 },
			{ company: "Bloomberg", num_occur: 5 },
			{ company: "Apple", num_occur: 4 },
			{ company: "Adobe", num_occur: 3 },
			{ company: "Goldman Sachs", num_occur: 2 },
			{ company: "Oracle", num_occur: 2 },
			{ company: "Nvidia", num_occur: 2 },
			{ company: "Salesforce", num_occur: 2 }
		],
		"set-matrix-zeroes": [
			{ company: "Microsoft", num_occur: 8 },
			{ company: "Amazon", num_occur: 6 },
			{ company: "Facebook", num_occur: 5 },
			{ company: "Apple", num_occur: 4 },
			{ company: "Bloomberg", num_occur: 3 }
		],
		"edit-distance": [
			{ company: "Amazon", num_occur: 8 },
			{ company: "LinkedIn", num_occur: 7 },
			{ company: "Microsoft", num_occur: 6 },
			{ company: "Google", num_occur: 4 },
			{ company: "Apple", num_occur: 3 },
			{ company: "Bloomberg", num_occur: 2 },
			{ company: "Facebook", num_occur: 2 },
			{ company: "Rubrik", num_occur: 2 }
		],
		"simplify-path": [
			{ company: "Facebook", num_occur: 112 },
			{ company: "Amazon", num_occur: 8 },
			{ company: "Google", num_occur: 5 },
			{ company: "Apple", num_occur: 3 }
		],
		"climbing-stairs": [
			{ company: "Amazon", num_occur: 14 },
			{ company: "Expedia", num_occur: 7 },
			{ company: "Microsoft", num_occur: 7 },
			{ company: "Uber", num_occur: 4 },
			{ company: "Google", num_occur: 4 },
			{ company: "Adobe", num_occur: 3 },
			{ company: "Yahoo", num_occur: 3 },
			{ company: "Goldman Sachs", num_occur: 2 },
			{ company: "Bloomberg", num_occur: 2 }
		],
		sqrtx: [
			{ company: "LinkedIn", num_occur: 9 },
			{ company: "Amazon", num_occur: 9 },
			{ company: "Apple", num_occur: 5 },
			{ company: "Google", num_occur: 4 },
			{ company: "Adobe", num_occur: 4 },
			{ company: "Microsoft", num_occur: 3 },
			{ company: "Bloomberg", num_occur: 2 }
		],
		"text-justification": [
			{ company: "Google", num_occur: 24 },
			{ company: "LinkedIn", num_occur: 18 },
			{ company: "Karat", num_occur: 10 },
			{ company: "Uber", num_occur: 6 },
			{ company: "Facebook", num_occur: 4 },
			{ company: "Square", num_occur: 3 },
			{ company: "Apple", num_occur: 3 },
			{ company: "Reddit", num_occur: 3 },
			{ company: "Twilio", num_occur: 3 },
			{ company: "Indeed", num_occur: 3 }
		],
		"add-binary": [
			{ company: "Facebook", num_occur: 10 },
			{ company: "Amazon", num_occur: 6 },
			{ company: "Snapchat", num_occur: 3 },
			{ company: "Google", num_occur: 2 },
			{ company: "Adobe", num_occur: 2 },
			{ company: "Uber", num_occur: 2 }
		],
		"plus-one": [
			{ company: "Facebook", num_occur: 11 },
			{ company: "Google", num_occur: 5 },
			{ company: "Amazon", num_occur: 5 },
			{ company: "Adobe", num_occur: 2 },
			{ company: "Apple", num_occur: 2 },
			{ company: "ByteDance", num_occur: 2 }
		],
		"valid-number": [
			{ company: "Facebook", num_occur: 53 },
			{ company: "LinkedIn", num_occur: 10 }
		],
		"minimum-path-sum": [
			{ company: "Amazon", num_occur: 7 },
			{ company: "Microsoft", num_occur: 5 },
			{ company: "Google", num_occur: 4 },
			{ company: "Goldman Sachs", num_occur: 3 },
			{ company: "Oracle", num_occur: 3 },
			{ company: "Apple", num_occur: 3 },
			{ company: "Uber", num_occur: 2 },
			{ company: "Square", num_occur: 2 }
		],
		"unique-paths-ii": [
			{ company: "Cruise Automation", num_occur: 9 },
			{ company: "Facebook", num_occur: 8 },
			{ company: "Amazon", num_occur: 7 },
			{ company: "Qualtrics", num_occur: 4 },
			{ company: "Google", num_occur: 3 },
			{ company: "Cisco", num_occur: 3 },
			{ company: "Microsoft", num_occur: 2 },
			{ company: "Oracle", num_occur: 2 }
		],
		"unique-paths": [
			{ company: "Google", num_occur: 15 },
			{ company: "Facebook", num_occur: 11 },
			{ company: "Microsoft", num_occur: 9 },
			{ company: "Amazon", num_occur: 8 },
			{ company: "Apple", num_occur: 7 },
			{ company: "Bloomberg", num_occur: 4 },
			{ company: "Adobe", num_occur: 4 }
		],
		"rotate-list": [
			{ company: "Microsoft", num_occur: 4 },
			{ company: "Bloomberg", num_occur: 3 }
		],
		"permutation-sequence": [
			{ company: "Facebook", num_occur: 2 },
			{ company: "Adobe", num_occur: 2 }
		],
		"spiral-matrix-ii": [
			{ company: "tiktok", num_occur: 6 },
			{ company: "Apple", num_occur: 4 },
			{ company: "Amazon", num_occur: 2 }
		],
		"length-of-last-word": [
			{ company: "Amazon", num_occur: 3 },
			{ company: "Microsoft", num_occur: 2 }
		],
		"insert-interval": [
			{ company: "Google", num_occur: 11 },
			{ company: "LinkedIn", num_occur: 9 },
			{ company: "Facebook", num_occur: 5 },
			{ company: "Amazon", num_occur: 5 },
			{ company: "Robinhood", num_occur: 3 }
		],
		"merge-intervals": [
			{ company: "Facebook", num_occur: 110 },
			{ company: "Amazon", num_occur: 87 },
			{ company: "Google", num_occur: 28 },
			{ company: "Bloomberg", num_occur: 20 },
			{ company: "Salesforce", num_occur: 19 },
			{ company: "Apple", num_occur: 18 },
			{ company: "Microsoft", num_occur: 15 },
			{ company: "Uber", num_occur: 14 },
			{ company: "Adobe", num_occur: 8 },
			{ company: "IBM", num_occur: 8 },
			{ company: "LinkedIn", num_occur: 7 },
			{ company: "Snapchat", num_occur: 5 },
			{ company: "Walmart Global Tech", num_occur: 5 },
			{ company: "VMware", num_occur: 5 },
			{ company: "Oracle", num_occur: 4 },
			{ company: "Yandex", num_occur: 4 },
			{ company: "Shopee", num_occur: 4 },
			{ company: "Twitter", num_occur: 3 },
			{ company: "Cisco", num_occur: 2 },
			{ company: "Intuit", num_occur: 2 },
			{ company: "Nvidia", num_occur: 2 },
			{ company: "Morgan Stanley", num_occur: 2 },
			{ company: "ByteDance", num_occur: 2 },
			{ company: "tiktok", num_occur: 2 }
		],
		"jump-game": [
			{ company: "Amazon", num_occur: 20 },
			{ company: "Facebook", num_occur: 8 },
			{ company: "Apple", num_occur: 3 },
			{ company: "DoorDash", num_occur: 3 },
			{ company: "Flipkart", num_occur: 3 },
			{ company: "Google", num_occur: 2 },
			{ company: "Bloomberg", num_occur: 2 },
			{ company: "Qualtrics", num_occur: 2 },
			{ company: "Salesforce", num_occur: 2 }
		],
		"spiral-matrix": [
			{ company: "Microsoft", num_occur: 26 },
			{ company: "Amazon", num_occur: 13 },
			{ company: "Apple", num_occur: 11 },
			{ company: "Facebook", num_occur: 10 },
			{ company: "Google", num_occur: 8 },
			{ company: "Adobe", num_occur: 3 },
			{ company: "LiveRamp", num_occur: 3 },
			{ company: "Zillow", num_occur: 2 },
			{ company: "Uber", num_occur: 2 }
		],
		"maximum-subarray": [
			{ company: "LinkedIn", num_occur: 43 },
			{ company: "Amazon", num_occur: 35 },
			{ company: "Apple", num_occur: 17 },
			{ company: "Microsoft", num_occur: 15 },
			{ company: "Adobe", num_occur: 12 },
			{ company: "Google", num_occur: 11 },
			{ company: "Facebook", num_occur: 11 },
			{ company: "Cisco", num_occur: 11 },
			{ company: "JPMorgan", num_occur: 5 },
			{ company: "Shopee", num_occur: 5 },
			{ company: "Bloomberg", num_occur: 4 },
			{ company: "Uber", num_occur: 4 },
			{ company: "VMware", num_occur: 4 },
			{ company: "Oracle", num_occur: 3 },
			{ company: "Salesforce", num_occur: 3 },
			{ company: "ByteDance", num_occur: 3 },
			{ company: "Docusign", num_occur: 3 },
			{ company: "Samsung", num_occur: 3 },
			{ company: "Goldman Sachs", num_occur: 2 },
			{ company: "ServiceNow", num_occur: 2 },
			{ company: "Walmart Global Tech", num_occur: 2 },
			{ company: "PayTM", num_occur: 2 },
			{ company: "Infosys", num_occur: 2 }
		],
		"n-queens-ii": [
			{ company: "ByteDance", num_occur: 2 },
			{ company: "Zenefits", num_occur: 1 }
		],
		"n-queens": [
			{ company: "Amazon", num_occur: 7 },
			{ company: "Facebook", num_occur: 4 },
			{ company: "Microsoft", num_occur: 4 },
			{ company: "Google", num_occur: 3 },
			{ company: "Bloomberg", num_occur: 3 },
			{ company: "Adobe", num_occur: 3 },
			{ company: "ByteDance", num_occur: 3 },
			{ company: "tiktok", num_occur: 2 }
		],
		"powx-n": [
			{ company: "Facebook", num_occur: 162 },
			{ company: "Amazon", num_occur: 9 },
			{ company: "Bloomberg", num_occur: 8 },
			{ company: "LinkedIn", num_occur: 7 },
			{ company: "Google", num_occur: 5 },
			{ company: "Microsoft", num_occur: 5 },
			{ company: "Apple", num_occur: 5 },
			{ company: "Adobe", num_occur: 3 },
			{ company: "Yahoo", num_occur: 3 }
		],
		"group-anagrams": [
			{ company: "Amazon", num_occur: 51 },
			{ company: "Microsoft", num_occur: 29 },
			{ company: "Facebook", num_occur: 17 },
			{ company: "Apple", num_occur: 11 },
			{ company: "JPMorgan", num_occur: 8 },
			{ company: "BlackRock", num_occur: 6 },
			{ company: "Google", num_occur: 5 },
			{ company: "Walmart Global Tech", num_occur: 5 },
			{ company: "eBay", num_occur: 4 },
			{ company: "Adobe", num_occur: 4 },
			{ company: "Affirm", num_occur: 4 },
			{ company: "Oracle", num_occur: 4 },
			{ company: "Uber", num_occur: 3 },
			{ company: "Salesforce", num_occur: 3 },
			{ company: "Twilio", num_occur: 3 },
			{ company: "Visa", num_occur: 3 },
			{ company: "ServiceNow", num_occur: 3 },
			{ company: "Yahoo", num_occur: 2 },
			{ company: "Goldman Sachs", num_occur: 2 },
			{ company: "VMware", num_occur: 2 },
			{ company: "Alation", num_occur: 2 },
			{ company: "IBM", num_occur: 2 },
			{ company: "Cisco", num_occur: 2 },
			{ company: "tiktok", num_occur: 2 }
		],
		"rotate-image": [
			{ company: "Cisco", num_occur: 16 },
			{ company: "Facebook", num_occur: 12 },
			{ company: "Microsoft", num_occur: 9 },
			{ company: "Amazon", num_occur: 8 },
			{ company: "Apple", num_occur: 8 },
			{ company: "Adobe", num_occur: 5 },
			{ company: "Google", num_occur: 4 },
			{ company: "Bloomberg", num_occur: 3 },
			{ company: "Rubrik", num_occur: 2 },
			{ company: "Uber", num_occur: 2 }
		],
		"permutations-ii": [
			{ company: "Amazon", num_occur: 4 },
			{ company: "Microsoft", num_occur: 3 }
		],
		permutations: [
			{ company: "Amazon", num_occur: 9 },
			{ company: "Facebook", num_occur: 7 },
			{ company: "LinkedIn", num_occur: 6 },
			{ company: "Google", num_occur: 5 },
			{ company: "Microsoft", num_occur: 5 },
			{ company: "Apple", num_occur: 4 },
			{ company: "Adobe", num_occur: 3 },
			{ company: "Bloomberg", num_occur: 2 },
			{ company: "Goldman Sachs", num_occur: 2 }
		],
		"jump-game-ii": [
			{ company: "Amazon", num_occur: 13 },
			{ company: "Apple", num_occur: 4 },
			{ company: "Bloomberg", num_occur: 3 },
			{ company: "Google", num_occur: 3 },
			{ company: "DoorDash", num_occur: 3 },
			{ company: "tiktok", num_occur: 3 },
			{ company: "Microsoft", num_occur: 2 },
			{ company: "Adobe", num_occur: 2 },
			{ company: "Tesla", num_occur: 2 },
			{ company: "payu", num_occur: 2 }
		],
		"wildcard-matching": [
			{ company: "Microsoft", num_occur: 14 },
			{ company: "Amazon", num_occur: 5 },
			{ company: "Google", num_occur: 4 },
			{ company: "Facebook", num_occur: 2 },
			{ company: "Uber", num_occur: 2 },
			{ company: "Coursera", num_occur: 2 }
		],
		"multiply-strings": [
			{ company: "Facebook", num_occur: 14 },
			{ company: "Microsoft", num_occur: 12 },
			{ company: "Amazon", num_occur: 5 },
			{ company: "Google", num_occur: 5 },
			{ company: "Two Sigma", num_occur: 4 },
			{ company: "Adobe", num_occur: 2 }
		],
		"trapping-rain-water": [
			{ company: "Amazon", num_occur: 45 },
			{ company: "Goldman Sachs", num_occur: 38 },
			{ company: "Facebook", num_occur: 34 },
			{ company: "Bloomberg", num_occur: 15 },
			{ company: "Microsoft", num_occur: 9 },
			{ company: "Google", num_occur: 8 },
			{ company: "Apple", num_occur: 8 },
			{ company: "Adobe", num_occur: 7 },
			{ company: "Uber", num_occur: 5 },
			{ company: "Qualtrics", num_occur: 4 },
			{ company: "Rubrik", num_occur: 4 },
			{ company: "Snapchat", num_occur: 3 },
			{ company: "Intel", num_occur: 3 },
			{ company: "Oracle", num_occur: 3 },
			{ company: "Paypal", num_occur: 3 },
			{ company: "Tesla", num_occur: 3 },
			{ company: "Intuit", num_occur: 2 },
			{ company: "Citadel", num_occur: 2 },
			{ company: "Visa", num_occur: 2 },
			{ company: "ServiceNow", num_occur: 2 },
			{ company: "National Instruments", num_occur: 2 },
			{ company: "Sapient", num_occur: 2 }
		],
		"first-missing-positive": [
			{ company: "Amazon", num_occur: 20 },
			{ company: "Microsoft", num_occur: 16 },
			{ company: "Adobe", num_occur: 8 },
			{ company: "Google", num_occur: 5 },
			{ company: "Facebook", num_occur: 4 },
			{ company: "Databricks", num_occur: 2 },
			{ company: "Grab", num_occur: 2 },
			{ company: "Walmart Global Tech", num_occur: 2 }
		],
		"combination-sum-ii": [
			{ company: "Facebook", num_occur: 4 },
			{ company: "Amazon", num_occur: 4 },
			{ company: "Reddit", num_occur: 3 },
			{ company: "Bloomberg", num_occur: 2 },
			{ company: "Oracle", num_occur: 2 }
		],
		"combination-sum": [
			{ company: "Amazon", num_occur: 18 },
			{ company: "Facebook", num_occur: 12 },
			{ company: "Microsoft", num_occur: 6 },
			{ company: "Airbnb", num_occur: 5 },
			{ company: "Apple", num_occur: 4 },
			{ company: "Adobe", num_occur: 3 },
			{ company: "Bloomberg", num_occur: 3 },
			{ company: "LinkedIn", num_occur: 3 },
			{ company: "ByteDance", num_occur: 3 }
		],
		"count-and-say": [
			{ company: "Facebook", num_occur: 5 },
			{ company: "Google", num_occur: 3 },
			{ company: "Amazon", num_occur: 2 },
			{ company: "Apple", num_occur: 2 },
			{ company: "Adobe", num_occur: 2 },
			{ company: "Walmart Global Tech", num_occur: 2 }
		],
		"sudoku-solver": [
			{ company: "Amazon", num_occur: 7 },
			{ company: "Apple", num_occur: 6 },
			{ company: "Microsoft", num_occur: 5 },
			{ company: "Google", num_occur: 5 },
			{ company: "DoorDash", num_occur: 4 },
			{ company: "Intuit", num_occur: 4 },
			{ company: "Adobe", num_occur: 3 },
			{ company: "Uber", num_occur: 3 },
			{ company: "tiktok", num_occur: 3 },
			{ company: "Facebook", num_occur: 2 },
			{ company: "Salesforce", num_occur: 2 },
			{ company: "Nutanix", num_occur: 2 }
		],
		"valid-sudoku": [
			{ company: "Amazon", num_occur: 19 },
			{ company: "Microsoft", num_occur: 8 },
			{ company: "Uber", num_occur: 5 },
			{ company: "Cruise Automation", num_occur: 5 },
			{ company: "Apple", num_occur: 4 },
			{ company: "Facebook", num_occur: 4 },
			{ company: "Karat", num_occur: 3 },
			{ company: "Wayfair", num_occur: 3 },
			{ company: "Nvidia", num_occur: 3 }
		],
		"search-insert-position": [
			{ company: "Amazon", num_occur: 9 },
			{ company: "Apple", num_occur: 7 },
			{ company: "Adobe", num_occur: 7 },
			{ company: "Google", num_occur: 4 },
			{ company: "Bloomberg", num_occur: 3 },
			{ company: "Uber", num_occur: 2 },
			{ company: "Facebook", num_occur: 2 },
			{ company: "VMware", num_occur: 2 },
			{ company: "tiktok", num_occur: 2 }
		],
		"search-in-rotated-sorted-array": [
			{ company: "Amazon", num_occur: 31 },
			{ company: "Facebook", num_occur: 30 },
			{ company: "Microsoft", num_occur: 24 },
			{ company: "LinkedIn", num_occur: 17 },
			{ company: "Apple", num_occur: 7 },
			{ company: "Bloomberg", num_occur: 7 },
			{ company: "Adobe", num_occur: 7 },
			{ company: "ByteDance", num_occur: 6 },
			{ company: "Walmart Global Tech", num_occur: 5 },
			{ company: "Oracle", num_occur: 5 },
			{ company: "tiktok", num_occur: 4 },
			{ company: "VMware", num_occur: 3 },
			{ company: "Google", num_occur: 3 },
			{ company: "Visa", num_occur: 3 },
			{ company: "ServiceNow", num_occur: 3 },
			{ company: "Expedia", num_occur: 2 },
			{ company: "Nvidia", num_occur: 2 },
			{ company: "Salesforce", num_occur: 2 },
			{ company: "Goldman Sachs", num_occur: 2 },
			{ company: "Morgan Stanley", num_occur: 2 },
			{ company: "Splunk", num_occur: 2 }
		],
		"longest-valid-parentheses": [
			{ company: "Amazon", num_occur: 9 },
			{ company: "Facebook", num_occur: 4 },
			{ company: "Morgan Stanley", num_occur: 4 },
			{ company: "ByteDance", num_occur: 3 },
			{ company: "Microsoft", num_occur: 2 },
			{ company: "Oracle", num_occur: 2 },
			{ company: "VMware", num_occur: 2 }
		],
		"substring-with-concatenation-of-all-words": [
			{ company: "Amazon", num_occur: 3 },
			{ company: "Oracle", num_occur: 3 },
			{ company: "Google", num_occur: 2 },
			{ company: "Apple", num_occur: 2 },
			{ company: "Microsoft", num_occur: 2 }
		],
		"divide-two-integers": [
			{ company: "Facebook", num_occur: 11 },
			{ company: "Amazon", num_occur: 9 },
			{ company: "Google", num_occur: 5 },
			{ company: "Microsoft", num_occur: 3 },
			{ company: "Yahoo", num_occur: 2 },
			{ company: "Bloomberg", num_occur: 2 },
			{ company: "Adobe", num_occur: 2 }
		],
		"implement-strstr": [
			{ company: "Amazon", num_occur: 7 },
			{ company: "Microsoft", num_occur: 4 },
			{ company: "Google", num_occur: 4 },
			{ company: "Facebook", num_occur: 3 },
			{ company: "Apple", num_occur: 2 },
			{ company: "Uber", num_occur: 2 }
		],
		"remove-element": [
			{ company: "Amazon", num_occur: 5 },
			{ company: "Apple", num_occur: 4 },
			{ company: "Adobe", num_occur: 2 },
			{ company: "Google", num_occur: 2 },
			{ company: "Microsoft", num_occur: 2 }
		],
		"remove-duplicates-from-sorted-array": [
			{ company: "Facebook", num_occur: 16 },
			{ company: "Amazon", num_occur: 9 },
			{ company: "Adobe", num_occur: 7 },
			{ company: "Microsoft", num_occur: 6 },
			{ company: "LinkedIn", num_occur: 5 },
			{ company: "Bloomberg", num_occur: 4 },
			{ company: "Google", num_occur: 4 },
			{ company: "Apple", num_occur: 4 },
			{ company: "VMware", num_occur: 2 }
		],
		"reverse-nodes-in-k-group": [
			{ company: "Amazon", num_occur: 14 },
			{ company: "Microsoft", num_occur: 13 },
			{ company: "Capital One", num_occur: 13 },
			{ company: "Facebook", num_occur: 5 },
			{ company: "Google", num_occur: 2 },
			{ company: "Bloomberg", num_occur: 2 },
			{ company: "Yahoo", num_occur: 2 },
			{ company: "ByteDance", num_occur: 2 },
			{ company: "Zoom", num_occur: 2 }
		],
		"swap-nodes-in-pairs": [
			{ company: "Facebook", num_occur: 9 },
			{ company: "Amazon", num_occur: 8 },
			{ company: "Microsoft", num_occur: 7 },
			{ company: "Bloomberg", num_occur: 2 },
			{ company: "Adobe", num_occur: 2 },
			{ company: "Apple", num_occur: 2 }
		],
		"merge-k-sorted-lists": [
			{ company: "Facebook", num_occur: 59 },
			{ company: "Amazon", num_occur: 47 },
			{ company: "Microsoft", num_occur: 17 },
			{ company: "Apple", num_occur: 8 },
			{ company: "Google", num_occur: 8 },
			{ company: "ByteDance", num_occur: 8 },
			{ company: "VMware", num_occur: 4 },
			{ company: "Adobe", num_occur: 4 },
			{ company: "Indeed", num_occur: 3 },
			{ company: "LinkedIn", num_occur: 3 },
			{ company: "Oracle", num_occur: 3 },
			{ company: "Yandex", num_occur: 3 },
			{ company: "Bloomberg", num_occur: 2 },
			{ company: "Walmart Global Tech", num_occur: 2 },
			{ company: "Shopee", num_occur: 2 },
			{ company: "tiktok", num_occur: 2 },
			{ company: "Sprinklr", num_occur: 2 },
			{ company: "TuSimple", num_occur: 2 }
		],
		"generate-parentheses": [
			{ company: "Facebook", num_occur: 16 },
			{ company: "Amazon", num_occur: 15 },
			{ company: "Microsoft", num_occur: 13 },
			{ company: "Apple", num_occur: 9 },
			{ company: "Adobe", num_occur: 4 },
			{ company: "Google", num_occur: 4 },
			{ company: "Bloomberg", num_occur: 3 },
			{ company: "Uber", num_occur: 3 },
			{ company: "C3 IoT", num_occur: 3 },
			{ company: "Walmart Global Tech", num_occur: 3 },
			{ company: "Oracle", num_occur: 3 },
			{ company: "ByteDance", num_occur: 2 },
			{ company: "Tesla", num_occur: 2 }
		],
		"merge-two-sorted-lists": [
			{ company: "Amazon", num_occur: 20 },
			{ company: "Microsoft", num_occur: 13 },
			{ company: "Facebook", num_occur: 13 },
			{ company: "Adobe", num_occur: 11 },
			{ company: "Oracle", num_occur: 4 },
			{ company: "Uber", num_occur: 3 },
			{ company: "Google", num_occur: 3 },
			{ company: "Bloomberg", num_occur: 3 },
			{ company: "Shopee", num_occur: 3 },
			{ company: "Accenture", num_occur: 2 }
		],
		"valid-parentheses": [
			{ company: "Amazon", num_occur: 43 },
			{ company: "LinkedIn", num_occur: 33 },
			{ company: "Facebook", num_occur: 24 },
			{ company: "Microsoft", num_occur: 22 },
			{ company: "Bloomberg", num_occur: 14 },
			{ company: "Spotify", num_occur: 13 },
			{ company: "Apple", num_occur: 8 },
			{ company: "Adobe", num_occur: 8 },
			{ company: "Expedia", num_occur: 6 },
			{ company: "Google", num_occur: 6 },
			{ company: "Oracle", num_occur: 6 },
			{ company: "VMware", num_occur: 5 },
			{ company: "Cisco", num_occur: 5 },
			{ company: "Intel", num_occur: 4 },
			{ company: "Yandex", num_occur: 3 },
			{ company: "tiktok", num_occur: 3 },
			{ company: "Arista Networks", num_occur: 3 },
			{ company: "Barclays", num_occur: 2 },
			{ company: "ServiceNow", num_occur: 2 },
			{ company: "Uber", num_occur: 2 },
			{ company: "Goldman Sachs", num_occur: 2 },
			{ company: "Booking.com", num_occur: 2 },
			{ company: "Salesforce", num_occur: 2 },
			{ company: "Netflix", num_occur: 2 },
			{ company: "Dataminr", num_occur: 2 },
			{ company: "tcs", num_occur: 2 }
		],
		"remove-nth-node-from-end-of-list": [
			{ company: "Facebook", num_occur: 23 },
			{ company: "Amazon", num_occur: 10 },
			{ company: "Microsoft", num_occur: 6 },
			{ company: "Google", num_occur: 5 },
			{ company: "Bloomberg", num_occur: 3 },
			{ company: "Walmart Global Tech", num_occur: 3 },
			{ company: "Apple", num_occur: 2 },
			{ company: "Uber", num_occur: 2 }
		],
		"4sum": [
			{ company: "Amazon", num_occur: 6 },
			{ company: "Facebook", num_occur: 5 },
			{ company: "Apple", num_occur: 5 },
			{ company: "Microsoft", num_occur: 4 },
			{ company: "Adobe", num_occur: 3 },
			{ company: "Google", num_occur: 2 },
			{ company: "Yahoo", num_occur: 2 },
			{ company: "Infosys", num_occur: 2 },
			{ company: "LinkedIn", num_occur: 2 }
		],
		"letter-combinations-of-a-phone-number": [
			{ company: "Amazon", num_occur: 28 },
			{ company: "Microsoft", num_occur: 20 },
			{ company: "Facebook", num_occur: 14 },
			{ company: "Uber", num_occur: 9 },
			{ company: "Apple", num_occur: 7 },
			{ company: "Google", num_occur: 5 },
			{ company: "Bloomberg", num_occur: 5 },
			{ company: "Epic Systems", num_occur: 3 },
			{ company: "Swiggy", num_occur: 3 }
		],
		"3sum-closest": [
			{ company: "Facebook", num_occur: 25 },
			{ company: "Amazon", num_occur: 15 },
			{ company: "Adobe", num_occur: 4 },
			{ company: "Apple", num_occur: 3 },
			{ company: "Google", num_occur: 3 },
			{ company: "Microsoft", num_occur: 3 },
			{ company: "Goldman Sachs", num_occur: 2 }
		],
		"3sum": [
			{ company: "Amazon", num_occur: 44 },
			{ company: "Facebook", num_occur: 28 },
			{ company: "Microsoft", num_occur: 20 },
			{ company: "Apple", num_occur: 10 },
			{ company: "Adobe", num_occur: 9 },
			{ company: "Google", num_occur: 8 },
			{ company: "Walmart Global Tech", num_occur: 7 },
			{ company: "Bloomberg", num_occur: 6 },
			{ company: "Uber", num_occur: 6 },
			{ company: "Qualtrics", num_occur: 5 },
			{ company: "Yahoo", num_occur: 5 },
			{ company: "Goldman Sachs", num_occur: 4 },
			{ company: "tiktok", num_occur: 4 },
			{ company: "Salesforce", num_occur: 3 },
			{ company: "VMware", num_occur: 3 },
			{ company: "ByteDance", num_occur: 3 },
			{ company: "Morgan Stanley", num_occur: 3 },
			{ company: "Cisco", num_occur: 2 },
			{ company: "Oracle", num_occur: 2 },
			{ company: "Tesla", num_occur: 2 },
			{ company: "American Express", num_occur: 2 },
			{ company: "Infosys", num_occur: 2 }
		],
		"longest-common-prefix": [
			{ company: "Facebook", num_occur: 26 },
			{ company: "Apple", num_occur: 14 },
			{ company: "Google", num_occur: 12 },
			{ company: "Adobe", num_occur: 11 },
			{ company: "Amazon", num_occur: 9 },
			{ company: "Microsoft", num_occur: 5 },
			{ company: "Bloomberg", num_occur: 5 },
			{ company: "Uber", num_occur: 4 },
			{ company: "Quora", num_occur: 3 },
			{ company: "SAP", num_occur: 3 }
		],
		"roman-to-integer": [
			{ company: "Amazon", num_occur: 27 },
			{ company: "Adobe", num_occur: 16 },
			{ company: "Apple", num_occur: 13 },
			{ company: "Google", num_occur: 10 },
			{ company: "Bloomberg", num_occur: 10 },
			{ company: "Facebook", num_occur: 8 },
			{ company: "Microsoft", num_occur: 6 },
			{ company: "tiktok", num_occur: 5 },
			{ company: "Yahoo", num_occur: 4 }
		],
		"integer-to-roman": [
			{ company: "Amazon", num_occur: 27 },
			{ company: "Microsoft", num_occur: 5 },
			{ company: "Bloomberg", num_occur: 5 },
			{ company: "Apple", num_occur: 3 },
			{ company: "Capital One", num_occur: 3 },
			{ company: "Adobe", num_occur: 2 },
			{ company: "Google", num_occur: 2 },
			{ company: "tiktok", num_occur: 2 }
		],
		"container-with-most-water": [
			{ company: "Amazon", num_occur: 21 },
			{ company: "Microsoft", num_occur: 9 },
			{ company: "Adobe", num_occur: 9 },
			{ company: "Facebook", num_occur: 8 },
			{ company: "Google", num_occur: 5 },
			{ company: "Apple", num_occur: 5 },
			{ company: "Bloomberg", num_occur: 5 },
			{ company: "Swiggy", num_occur: 4 },
			{ company: "Goldman Sachs", num_occur: 3 }
		],
		"regular-expression-matching": [
			{ company: "Facebook", num_occur: 19 },
			{ company: "Microsoft", num_occur: 11 },
			{ company: "Google", num_occur: 9 },
			{ company: "Amazon", num_occur: 8 },
			{ company: "Nvidia", num_occur: 4 },
			{ company: "Bloomberg", num_occur: 3 },
			{ company: "Adobe", num_occur: 2 },
			{ company: "Apple", num_occur: 2 },
			{ company: "Uber", num_occur: 2 }
		],
		"palindrome-number": [
			{ company: "Google", num_occur: 11 },
			{ company: "Facebook", num_occur: 8 },
			{ company: "Amazon", num_occur: 7 },
			{ company: "Bloomberg", num_occur: 6 },
			{ company: "Adobe", num_occur: 5 },
			{ company: "Apple", num_occur: 3 },
			{ company: "Yahoo", num_occur: 2 },
			{ company: "Uber", num_occur: 2 },
			{ company: "Accenture", num_occur: 2 }
		],
		"string-to-integer-atoi": [
			{ company: "Facebook", num_occur: 32 },
			{ company: "Microsoft", num_occur: 16 },
			{ company: "Amazon", num_occur: 9 },
			{ company: "Google", num_occur: 6 },
			{ company: "Bloomberg", num_occur: 5 },
			{ company: "Adobe", num_occur: 4 },
			{ company: "Goldman Sachs", num_occur: 3 },
			{ company: "Redfin", num_occur: 3 },
			{ company: "Apple", num_occur: 2 }
		],
		"reverse-integer": [
			{ company: "Adobe", num_occur: 13 },
			{ company: "Amazon", num_occur: 11 },
			{ company: "Google", num_occur: 5 },
			{ company: "Apple", num_occur: 4 },
			{ company: "Facebook", num_occur: 4 },
			{ company: "Microsoft", num_occur: 2 },
			{ company: "Yahoo", num_occur: 2 },
			{ company: "Oracle", num_occur: 2 },
			{ company: "Bloomberg", num_occur: 2 },
			{ company: "Visa", num_occur: 2 },
			{ company: "Samsung", num_occur: 2 }
		],
		"zigzag-conversion": [
			{ company: "Amazon", num_occur: 5 },
			{ company: "Adobe", num_occur: 4 },
			{ company: "Paypal", num_occur: 2 }
		],
		"longest-palindromic-substring": [
			{ company: "Amazon", num_occur: 35 },
			{ company: "Microsoft", num_occur: 18 },
			{ company: "Google", num_occur: 12 },
			{ company: "Adobe", num_occur: 12 },
			{ company: "Facebook", num_occur: 7 },
			{ company: "Apple", num_occur: 7 },
			{ company: "Oracle", num_occur: 7 },
			{ company: "Bloomberg", num_occur: 6 },
			{ company: "Goldman Sachs", num_occur: 5 }
		],
		"median-of-two-sorted-arrays": [
			{ company: "Amazon", num_occur: 40 },
			{ company: "Adobe", num_occur: 19 },
			{ company: "Goldman Sachs", num_occur: 18 },
			{ company: "Microsoft", num_occur: 15 },
			{ company: "Apple", num_occur: 15 },
			{ company: "Google", num_occur: 14 },
			{ company: "Facebook", num_occur: 7 },
			{ company: "ServiceNow", num_occur: 4 },
			{ company: "Paypal", num_occur: 3 },
			{ company: "Bloomberg", num_occur: 2 },
			{ company: "VMware", num_occur: 2 },
			{ company: "LinkedIn", num_occur: 2 },
			{ company: "Walmart Global Tech", num_occur: 2 },
			{ company: "Yandex", num_occur: 2 }
		],
		"longest-substring-without-repeating-characters": [
			{ company: "Amazon", num_occur: 49 },
			{ company: "Microsoft", num_occur: 29 },
			{ company: "Facebook", num_occur: 23 },
			{ company: "Bloomberg", num_occur: 23 },
			{ company: "Apple", num_occur: 16 },
			{ company: "Google", num_occur: 13 },
			{ company: "Spotify", num_occur: 10 },
			{ company: "Adobe", num_occur: 6 },
			{ company: "Uber", num_occur: 5 },
			{ company: "VMware", num_occur: 5 },
			{ company: "Yahoo", num_occur: 4 },
			{ company: "Goldman Sachs", num_occur: 4 },
			{ company: "Oracle", num_occur: 4 },
			{ company: "Walmart Global Tech", num_occur: 3 },
			{ company: "Salesforce", num_occur: 3 },
			{ company: "Paypal", num_occur: 2 },
			{ company: "Samsung", num_occur: 2 },
			{ company: "Intuit", num_occur: 2 },
			{ company: "Yandex", num_occur: 2 },
			{ company: "Zoho", num_occur: 2 },
			{ company: "JPMorgan", num_occur: 2 }
		],
		"add-two-numbers": [
			{ company: "Amazon", num_occur: 36 },
			{ company: "Apple", num_occur: 19 },
			{ company: "Facebook", num_occur: 19 },
			{ company: "Microsoft", num_occur: 17 },
			{ company: "Bloomberg", num_occur: 16 },
			{ company: "Google", num_occur: 10 },
			{ company: "Adobe", num_occur: 10 },
			{ company: "Yahoo", num_occur: 6 },
			{ company: "Oracle", num_occur: 4 },
			{ company: "Uber", num_occur: 4 },
			{ company: "JPMorgan", num_occur: 3 },
			{ company: "SAP", num_occur: 2 },
			{ company: "Capital One", num_occur: 2 },
			{ company: "Visa", num_occur: 2 },
			{ company: "Huawei", num_occur: 2 }
		],
		"two-sum": [
			{ company: "Amazon", num_occur: 117 },
			{ company: "Adobe", num_occur: 52 },
			{ company: "Google", num_occur: 44 },
			{ company: "Apple", num_occur: 40 },
			{ company: "Microsoft", num_occur: 39 },
			{ company: "Facebook", num_occur: 21 },
			{ company: "Bloomberg", num_occur: 16 },
			{ company: "Uber", num_occur: 11 },
			{ company: "Spotify", num_occur: 8 },
			{ company: "Goldman Sachs", num_occur: 7 },
			{ company: "Expedia", num_occur: 7 },
			{ company: "Oracle", num_occur: 6 },
			{ company: "Yahoo", num_occur: 4 },
			{ company: "Zoho", num_occur: 4 },
			{ company: "Visa", num_occur: 4 },
			{ company: "Morgan Stanley", num_occur: 3 },
			{ company: "IBM", num_occur: 3 },
			{ company: "Paypal", num_occur: 3 },
			{ company: "JPMorgan", num_occur: 3 },
			{ company: "Walmart Global Tech", num_occur: 3 },
			{ company: "Intel", num_occur: 3 },
			{ company: "Salesforce", num_occur: 3 },
			{ company: "Dell", num_occur: 3 },
			{ company: "American Express", num_occur: 3 },
			{ company: "Accenture", num_occur: 3 },
			{ company: "Samsung", num_occur: 2 },
			{ company: "Intuit", num_occur: 2 },
			{ company: "Zillow", num_occur: 2 },
			{ company: "Zoom", num_occur: 2 },
			{ company: "Zomato", num_occur: 2 }
		]
	},
	"hackerrank.com": {}
};

export default problemToCompanyMatcher;
